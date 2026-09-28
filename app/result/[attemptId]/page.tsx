/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getAttemptById } from "@/lib/storage";
import { getAllQuestions } from "@/data/questions";
import { ResultSummary } from "@/components/result/ResultSummary";
import { TopicChart } from "@/components/result/TopicChart";
import { ReviewList } from "@/components/result/ReviewList";
import { useQuizStore } from "@/store/quizStore";
import type { AttemptResult, Question } from "@/types";

export default function ResultPage() {
  const params = useParams<{ attemptId: string }>();
  const router = useRouter();
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [mounted, setMounted] = useState(false);

  const startQuiz = useQuizStore((s) => s.startQuiz);

  useEffect(() => {
    const attempt = getAttemptById(params.attemptId);
    if (!attempt) {
      router.replace("/");
      return;
    }
    setResult(attempt);

    // Rebuild question list from IDs
    const allQ = getAllQuestions();
    const qMap = new Map(allQ.map((q) => [q.id, q]));
    const ordered = attempt.questionIds
      .map((id) => qMap.get(id))
      .filter((q): q is Question => q !== undefined);
    setQuestions(ordered);
    setMounted(true);
  }, [params.attemptId]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleRetry() {
    if (!result) return;
    startQuiz(result.config);
    router.push("/quiz");
  }

  function handleRetryWrong() {
    if (!result) return;
    const wrongIds = new Set(
      Object.entries(result.answers)
        .filter(([qId, ans]) => {
          const q = questions.find((qq) => qq.id === qId);
          return q && ans !== q.answer;
        })
        .map(([qId]) => qId),
    );

    // Create a config that targets only wrong topics
    const wrongTopics = [
      ...new Set(
        questions
          .filter((q) => wrongIds.has(q.id))
          .map((q) => q.topic),
      ),
    ];

    const wrongCount = wrongIds.size;
    // Find nearest valid questionCount
    const validCounts = [10, 20, 30, 50] as const;
    const questionCount =
      validCounts.find((c) => c >= wrongCount) ?? 50;

    startQuiz({
      ...result.config,
      topics: wrongTopics,
      questionCount,
      mode: "practice",
    });
    router.push("/quiz");
  }

  function handleShare() {
    if (!result) return;
    const text = `Network Quest – Kết quả làm bài:\n🎯 Điểm: ${result.score}/10 (${result.percentage}%)\n✅ Đúng: ${result.correct}/${result.total}\n⏱ Thời gian: ${Math.round(result.duration / 60)} phút`;
    navigator.clipboard.writeText(text).catch(() => {});
  }

  if (!mounted || !result) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 animate-fade-in-up">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
      >
        <ArrowLeft size={15} aria-hidden />
        Trang chủ
      </Link>

      {/* Summary */}
      <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm dark:shadow-xl transition-colors">
        <ResultSummary
          result={result}
          onRetry={handleRetry}
          onRetryWrong={handleRetryWrong}
          onShare={handleShare}
        />
      </div>

      {/* Topic chart */}
      {result.topicStats.length > 0 && (
        <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm dark:shadow-none transition-colors">
          <TopicChart topicStats={result.topicStats} />
        </div>
      )}

      {/* Review */}
      {questions.length > 0 && (
        <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm dark:shadow-none transition-colors">
          <ReviewList result={result} questions={questions} />
        </div>
      )}
    </div>
  );
}

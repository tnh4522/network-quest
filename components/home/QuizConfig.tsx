"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import {
  BookOpen,
  Clock,
  ChevronRight,
  CheckSquare,
  Layers,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  LEVELS,
  QUIZ_MODES,
  QUESTION_COUNT_OPTIONS,
  EXAM_TIME_LIMITS,
  ALL_TOPICS,
  TOPICS_BASIC,
  TOPICS_INTERMEDIATE,
  TOPICS_ADVANCED,
} from "@/lib/constants";
import { useQuizStore } from "@/store/quizStore";
import type { QuizConfig, Level, QuizMode } from "@/types";

const levelBadgeVariant: Record<string, "green" | "yellow" | "red" | "purple"> = {
  basic: "green",
  intermediate: "yellow",
  advanced: "red",
  mixed: "purple",
};

function topicsForLevel(level: Level | "mixed") {
  if (level === "basic") return TOPICS_BASIC;
  if (level === "intermediate") return TOPICS_INTERMEDIATE;
  if (level === "advanced") return TOPICS_ADVANCED;
  return ALL_TOPICS;
}

export function QuizConfig() {
  const router = useRouter();
  const startQuiz = useQuizStore((s) => s.startQuiz);

  const [level, setLevel] = useState<Level | "mixed">("basic");
  const [topics, setTopics] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState<10 | 20 | 30 | 50>(20);
  const [mode, setMode] = useState<QuizMode>("practice");

  const availableTopics = topicsForLevel(level);

  function toggleTopic(id: string) {
    setTopics((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  }

  function handleLevelChange(newLevel: Level | "mixed") {
    setLevel(newLevel);
    setTopics([]); // reset topics when level changes
  }

  function handleStart() {
    const config: QuizConfig = {
      level,
      topics,
      questionCount,
      mode,
      timeLimit:
        mode === "exam" ? (EXAM_TIME_LIMITS[questionCount] ?? 30 * 60) : 0,
    };
    startQuiz(config);
    router.push("/quiz");
  }

  const timeLabel =
    mode === "exam"
      ? `${Math.round((EXAM_TIME_LIMITS[questionCount] ?? 0) / 60)} phút`
      : "Không giới hạn";

  return (
    <div className="space-y-6">
      {/* Level */}
      <section aria-labelledby="level-heading">
        <div className="flex items-center gap-2 mb-3">
          <Layers size={16} className="text-cyan-600 dark:text-cyan-400" aria-hidden />
          <h2 id="level-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
            Mức độ
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {LEVELS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleLevelChange(l.id)}
              aria-pressed={level === l.id}
              className={clsx(
                "rounded-xl px-3 py-2.5 text-sm font-medium transition-all border",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                level === l.id
                  ? "bg-cyan-500 text-slate-950 border-cyan-500 shadow-md shadow-cyan-500/20 font-bold"
                  : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 border-slate-200 hover:border-slate-300 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700 dark:hover:border-slate-500",
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section aria-labelledby="topics-heading">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckSquare size={16} className="text-cyan-600 dark:text-cyan-400" aria-hidden />
            <h2 id="topics-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
              Chủ đề
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {topics.length === 0 ? "Tất cả" : `${topics.length} đã chọn`}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {availableTopics.map((t) => (
            <button
              key={t.id}
              onClick={() => toggleTopic(t.id)}
              aria-pressed={topics.includes(t.id)}
              className={clsx(
                "text-xs px-3 py-1.5 rounded-lg border transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                topics.includes(t.id)
                  ? "bg-cyan-100 text-cyan-800 border-cyan-400 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/50 font-medium"
                  : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900 dark:bg-slate-800/40 dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-500",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        {topics.length > 0 && (
          <button
            onClick={() => setTopics([])}
            className="mt-2 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
          >
            Xoá bộ lọc chủ đề
          </button>
        )}
      </section>

      {/* Question Count */}
      <section aria-labelledby="count-heading">
        <div className="flex items-center gap-2 mb-3">
          <Hash size={16} className="text-cyan-600 dark:text-cyan-400" aria-hidden />
          <h2 id="count-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
            Số câu
          </h2>
        </div>
        <div className="flex gap-2">
          {QUESTION_COUNT_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => setQuestionCount(n)}
              aria-pressed={questionCount === n}
              className={clsx(
                "flex-1 py-2 rounded-xl text-sm font-medium transition-all border",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                questionCount === n
                  ? "bg-cyan-500 text-slate-950 border-cyan-500 shadow-md shadow-cyan-500/20 font-bold"
                  : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 border-slate-200 hover:border-slate-300 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700 dark:hover:border-slate-500",
              )}
            >
              {n}
            </button>
          ))}
        </div>
      </section>

      {/* Mode */}
      <section aria-labelledby="mode-heading">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-cyan-600 dark:text-cyan-400" aria-hidden />
          <h2 id="mode-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
            Chế độ
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {QUIZ_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              aria-pressed={mode === m.id}
              className={clsx(
                "p-4 rounded-xl text-left border transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                mode === m.id
                  ? "bg-cyan-50/80 border-cyan-500 text-slate-900 dark:bg-cyan-500/10 dark:border-cyan-500/50 dark:text-white shadow-sm"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-800/40 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500",
              )}
            >
              <p className={clsx("font-semibold text-sm mb-1", mode === m.id ? "text-cyan-700 dark:text-cyan-300" : "text-slate-800 dark:text-slate-200")}>
                {m.label}
              </p>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{m.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Summary & Start */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Clock size={14} aria-hidden />
            <span>Thời gian: {timeLabel}</span>
          </div>
          <div className="flex gap-2">
            <Badge variant={levelBadgeVariant[level]}>
              {LEVELS.find((l) => l.id === level)?.label}
            </Badge>
            <Badge variant="slate">{questionCount} câu</Badge>
          </div>
        </div>
        <Button onClick={handleStart} size="lg" className="w-full">
          Bắt đầu làm bài
          <ChevronRight size={18} aria-hidden />
        </Button>
      </div>
    </div>
  );
}

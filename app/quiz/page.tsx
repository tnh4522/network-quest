/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
  Send,
  RotateCcw,
} from "lucide-react";
import { clsx } from "clsx";

import { useQuizStore } from "@/store/quizStore";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { OptionButton } from "@/components/quiz/OptionButton";
import { Timer } from "@/components/quiz/Timer";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionNavigator } from "@/components/quiz/QuestionNavigator";
import { ExplanationPanel } from "@/components/quiz/ExplanationPanel";
import { SubmitDialog } from "@/components/quiz/SubmitDialog";
import { Button } from "@/components/ui/Button";

import { buildAttemptResult, generateSessionId } from "@/lib/quiz-engine";
import { saveAttempt, getActiveQuiz } from "@/lib/storage";
import { getAllQuestions } from "@/data/questions";
import type { AnswerKey } from "@/types";

const OPTION_KEYS: AnswerKey[] = ["A", "B", "C", "D"];

export default function QuizPage() {
  const router = useRouter();
  const [showNavigator, setShowNavigator] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [mounted, setMounted] = useState(false);

  const {
    config,
    questions,
    currentIndex,
    answers,
    markedIds,
    timeRemaining,
    submitted,
    startedAt,
    seed,
    sessionId,
    setAnswer,
    setCurrentIndex,
    toggleMark,
    tickTimer,
    submitQuiz,
    resumeQuiz,
    getAnsweredCount,
    getUnansweredCount,
  } = useQuizStore();

  // ------------------------------------------------------------------
  //  On mount: check if we need to resume from localStorage
  // ------------------------------------------------------------------
  useEffect(() => {
    // If no questions in store, try to resume from localStorage
    if (questions.length === 0) {
      const saved = getActiveQuiz();
      if (saved) {
        const allQ = getAllQuestions();
        resumeQuiz(saved, allQ);
      } else {
        // No active quiz, redirect home
        router.replace("/");
      }
    }
    setMounted(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ------------------------------------------------------------------
  //  Handle submission
  // ------------------------------------------------------------------
  const handleSubmit = useCallback(() => {
    if (!config || questions.length === 0) return;

    const duration = startedAt
      ? Math.round((Date.now() - new Date(startedAt).getTime()) / 1000)
      : 0;

    const result = buildAttemptResult(
      sessionId ?? generateSessionId(),
      config,
      questions,
      answers,
      markedIds,
      seed,
      duration,
    );

    saveAttempt(result);
    submitQuiz();
    router.push(`/result/${result.attemptId}`);
  }, [config, questions, answers, markedIds, seed, sessionId, startedAt, submitQuiz, router]);

  // ------------------------------------------------------------------
  //  Timer expiry
  // ------------------------------------------------------------------
  const handleTimerExpire = useCallback(() => {
    handleSubmit();
  }, [handleSubmit]);

  // ------------------------------------------------------------------
  //  Keyboard shortcuts
  // ------------------------------------------------------------------
  useEffect(() => {
    if (!mounted || !config) return;

    function handleKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const currentQ = questions[currentIndex];
      if (!currentQ) return;

      const isPractice = config?.mode === "practice";
      const alreadyAnswered = answers[currentQ.id] !== undefined;

      // A/B/C/D or 1/2/3/4 to select answer
      if (!alreadyAnswered || !isPractice) {
        const keyMap: Record<string, AnswerKey> = {
          a: "A", b: "B", c: "C", d: "D",
          "1": "A", "2": "B", "3": "C", "4": "D",
        };
        const key = keyMap[e.key.toLowerCase()];
        if (key) {
          e.preventDefault();
          if (!isPractice || !alreadyAnswered) {
            setAnswer(currentQ.id, key);
          }
        }
      }

      // Arrow navigation
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex(currentIndex - 1);
      }
      if (e.key === "ArrowRight" && currentIndex < questions.length - 1) {
        e.preventDefault();
        setCurrentIndex(currentIndex + 1);
      }

      // M to mark
      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMark(currentQ.id);
      }

      // Enter to go next
      if (e.key === "Enter" && currentIndex < questions.length - 1) {
        e.preventDefault();
        setCurrentIndex(currentIndex + 1);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mounted, config, questions, currentIndex, answers, setAnswer, setCurrentIndex, toggleMark]);

  // ------------------------------------------------------------------
  //  Prevent accidental navigation (exam mode)
  // ------------------------------------------------------------------
  useEffect(() => {
    if (config?.mode !== "exam") return;
    function handleBeforeUnload(e: BeforeUnloadEvent) {
      e.preventDefault();
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [config]);

  // ------------------------------------------------------------------
  //  Not mounted yet
  // ------------------------------------------------------------------
  if (!mounted || questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-400">Đang tải câu hỏi...</p>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isPractice = config?.mode === "practice";
  const userAnswer = currentQ ? answers[currentQ.id] : undefined;
  const isAnswered = userAnswer !== undefined;
  const isMarked = currentQ ? markedIds.includes(currentQ.id) : false;
  const answeredCount = getAnsweredCount();
  const unansweredCount = getUnansweredCount();

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 space-y-4">
      {/* --------------------------------------------------------
          Top bar: progress + timer
      -------------------------------------------------------- */}
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <ProgressBar
            answered={answeredCount}
            total={questions.length}
            marked={markedIds.length}
          />
        </div>
        {config?.mode === "exam" && timeRemaining !== null && (
          <Timer
            seconds={timeRemaining}
            onExpire={handleTimerExpire}
            onTick={tickTimer}
          />
        )}
      </div>

      {/* --------------------------------------------------------
          Main layout: question + sidebar
      -------------------------------------------------------- */}
      <div className="grid lg:grid-cols-[1fr_220px] gap-4">
        {/* Question panel */}
        <div className="space-y-4">
          {/* Question card */}
          <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm dark:shadow-lg transition-colors">
            {currentQ && (
              <QuestionCard
                question={currentQ}
                index={currentIndex}
                total={questions.length}
              />
            )}
          </div>

          {/* Options */}
          <div
            className="space-y-2.5"
            role="radiogroup"
            aria-label="Chọn đáp án"
          >
            {currentQ &&
              OPTION_KEYS.map((key) => (
                <OptionButton
                  key={key}
                  optionKey={key}
                  text={currentQ.options[key]}
                  selected={userAnswer === key}
                  disabled={isPractice && isAnswered}
                  correctAnswer={isPractice && isAnswered ? currentQ.answer : undefined}
                  onClick={() => {
                    if (isPractice && isAnswered) return;
                    if (!isPractice && submitted) return;
                    if (currentQ) setAnswer(currentQ.id, key);
                  }}
                />
              ))}
          </div>

          {/* Explanation (practice mode) */}
          {isPractice && isAnswered && currentQ && (
            <div className="animate-fade-in-up">
              <ExplanationPanel question={currentQ} userAnswer={userAnswer} />
            </div>
          )}
        </div>

        {/* Sidebar navigator (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-20 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm dark:shadow-none transition-colors">
            <QuestionNavigator
              questions={questions}
              answers={answers}
              markedIds={markedIds}
              currentIndex={currentIndex}
              onSelect={setCurrentIndex}
            />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------
          Bottom navigation bar
      -------------------------------------------------------- */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Prev */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          aria-label="Câu trước (←)"
        >
          <ChevronLeft size={16} aria-hidden />
          Trước
        </Button>

        {/* Next */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1))
          }
          disabled={currentIndex === questions.length - 1}
          aria-label="Câu sau (→)"
        >
          Sau
          <ChevronRight size={16} aria-hidden />
        </Button>

        {/* Mark */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => currentQ && toggleMark(currentQ.id)}
          aria-label={isMarked ? "Bỏ đánh dấu (M)" : "Đánh dấu xem lại (M)"}
          className={clsx(isMarked && "text-amber-400")}
        >
          {isMarked ? (
            <BookmarkCheck size={15} aria-hidden />
          ) : (
            <Bookmark size={15} aria-hidden />
          )}
          <span className="hidden sm:inline">
            {isMarked ? "Bỏ đánh dấu" : "Đánh dấu"}
          </span>
        </Button>

        {/* Mobile navigator toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowNavigator((v) => !v)}
          className="lg:hidden"
          aria-expanded={showNavigator}
          aria-controls="mobile-navigator"
        >
          <RotateCcw size={15} aria-hidden />
          <span className="hidden sm:inline">Điều hướng</span>
        </Button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Submit */}
        <Button
          variant="primary"
          size="sm"
          onClick={() => setShowSubmitDialog(true)}
          aria-label="Nộp bài"
        >
          <Send size={15} aria-hidden />
          Nộp bài
        </Button>
      </div>

      {/* Mobile navigator */}
      {showNavigator && (
        <div
          id="mobile-navigator"
          className="lg:hidden bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm dark:shadow-none animate-fade-in-up transition-colors"
        >
          <QuestionNavigator
            questions={questions}
            answers={answers}
            markedIds={markedIds}
            currentIndex={currentIndex}
            onSelect={(idx) => {
              setCurrentIndex(idx);
              setShowNavigator(false);
            }}
          />
        </div>
      )}

      {/* Keyboard hint */}
      <p className="text-xs text-slate-500 dark:text-slate-400 text-center hidden sm:block" aria-hidden>
        Phím tắt: A/B/C/D chọn đáp án · ←→ chuyển câu · M đánh dấu · Enter câu sau
      </p>

      {/* Submit dialog */}
      {showSubmitDialog && (
        <SubmitDialog
          unanswered={unansweredCount}
          total={questions.length}
          onConfirm={handleSubmit}
          onCancel={() => setShowSubmitDialog(false)}
        />
      )}
    </div>
  );
}

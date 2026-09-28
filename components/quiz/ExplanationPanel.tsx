"use client";

import { Lightbulb } from "lucide-react";
import type { Question, AnswerKey } from "@/types";
import { clsx } from "clsx";

interface ExplanationPanelProps {
  question: Question;
  userAnswer: AnswerKey;
}

export function ExplanationPanel({ question, userAnswer }: ExplanationPanelProps) {
  const isCorrect = userAnswer === question.answer;

  return (
    <div
      className={clsx(
        "mt-4 rounded-xl border overflow-hidden transition-colors",
        isCorrect
          ? "border-emerald-200 bg-emerald-50/70 dark:border-emerald-500/40 dark:bg-emerald-500/10"
          : "border-red-200 bg-red-50/70 dark:border-red-500/40 dark:bg-red-500/10",
      )}
      role="region"
      aria-label="Giải thích đáp án"
    >
      {/* Header */}
      <div
        className={clsx(
          "px-4 py-2.5 flex items-center gap-2 border-b",
          isCorrect
            ? "border-emerald-200 dark:border-emerald-500/30"
            : "border-red-200 dark:border-red-500/30",
        )}
      >
        <span
          className={clsx(
            "text-sm font-semibold",
            isCorrect
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-red-700 dark:text-red-400",
          )}
        >
          {isCorrect ? "✓ Chính xác!" : "✗ Chưa đúng"}
        </span>
        {!isCorrect && (
          <span className="text-xs text-slate-600 dark:text-slate-400">
            – Đáp án đúng là{" "}
            <strong className="text-emerald-600 dark:text-emerald-400 font-bold">
              {question.answer}
            </strong>
          </span>
        )}
      </div>

      {/* Explanation */}
      <div className="px-4 py-3 space-y-3">
        <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
          {question.explanation}
        </p>

        {/* Tip */}
        {question.tip && (
          <div className="flex gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
            <Lightbulb
              size={15}
              className="flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5"
              aria-hidden
            />
            <p className="text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
              <strong className="font-semibold">Mẹo nhớ:</strong> {question.tip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

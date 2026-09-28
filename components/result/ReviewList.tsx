"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { ReviewCard } from "./ReviewCard";
import type { AttemptResult, ReviewFilter } from "@/types";
import type { Question } from "@/types";

interface ReviewListProps {
  result: AttemptResult;
  questions: Question[];
}

const FILTERS: { id: ReviewFilter; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "wrong", label: "Sai" },
  { id: "skipped", label: "Bỏ trống" },
  { id: "marked", label: "Đánh dấu" },
];

export function ReviewList({ result, questions }: ReviewListProps) {
  const [filter, setFilter] = useState<ReviewFilter>("all");

  const filtered = questions.filter((q) => {
    const userAnswer = result.answers[q.id];
    if (filter === "wrong") return userAnswer !== undefined && userAnswer !== q.answer;
    if (filter === "skipped") return userAnswer === undefined;
    if (filter === "marked") return result.markedIds.includes(q.id);
    return true;
  });

  const counts = {
    all: questions.length,
    wrong: questions.filter(
      (q) => result.answers[q.id] !== undefined && result.answers[q.id] !== q.answer,
    ).length,
    skipped: questions.filter((q) => result.answers[q.id] === undefined).length,
    marked: questions.filter((q) => result.markedIds.includes(q.id)).length,
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
        Xem lại bài làm
      </h3>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap" role="group" aria-label="Lọc câu hỏi">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={clsx(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
              filter === f.id
                ? "bg-cyan-100 text-cyan-800 border-cyan-400 dark:bg-cyan-500/20 dark:border-cyan-500/40 dark:text-cyan-300 font-semibold shadow-sm"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500",
            )}
          >
            {f.label}
            <span className="ml-1.5 opacity-70">({counts[f.id]})</span>
          </button>
        ))}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-8 text-slate-500 text-sm">
          Không có câu nào trong bộ lọc này.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((q, i) => (
            <ReviewCard
              key={q.id}
              question={q}
              index={i}
              userAnswer={result.answers[q.id]}
              isMarked={result.markedIds.includes(q.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

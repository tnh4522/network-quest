"use client";

import { clsx } from "clsx";
import { Bookmark } from "lucide-react";
import type { AnswerKey } from "@/types";

interface QuestionNavigatorProps {
  questions: { id: string }[];
  answers: Record<string, AnswerKey | undefined>;
  markedIds: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export function QuestionNavigator({
  questions,
  answers,
  markedIds,
  currentIndex,
  onSelect,
}: QuestionNavigatorProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
          Điều hướng
        </span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-3 text-xs text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-cyan-500 inline-block shadow-sm" aria-hidden />
          Hiện tại
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-emerald-500/60 inline-block" aria-hidden />
          Đã làm
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-slate-300 dark:bg-slate-700 inline-block" aria-hidden />
          Chưa làm
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-amber-500/60 inline-block" aria-hidden />
          Đánh dấu
        </span>
      </div>

      {/* Grid */}
      <div
        className="grid gap-1.5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(36px, 1fr))" }}
        role="group"
        aria-label="Điều hướng câu hỏi"
      >
        {questions.map((q, idx) => {
          const answered = answers[q.id] !== undefined;
          const marked = markedIds.includes(q.id);
          const current = idx === currentIndex;

          return (
            <button
              key={q.id}
              onClick={() => onSelect(idx)}
              aria-label={`Câu ${idx + 1}${answered ? " – Đã làm" : " – Chưa làm"}${marked ? " – Đánh dấu" : ""}`}
              aria-current={current ? "step" : undefined}
              className={clsx(
                "relative h-9 w-full rounded-lg text-xs font-semibold transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                current && "ring-2 ring-cyan-500 bg-cyan-500 text-slate-950 font-bold shadow-sm",
                !current && answered && !marked && "bg-emerald-100 text-emerald-800 border border-emerald-300/80 dark:border-transparent dark:bg-emerald-500/30 dark:text-emerald-300 hover:bg-emerald-200/80 dark:hover:bg-emerald-500/40",
                !current && !answered && !marked && "bg-slate-100 text-slate-700 border border-slate-200 dark:border-transparent dark:bg-slate-700 dark:text-slate-400 hover:bg-slate-200/80 dark:hover:bg-slate-600",
                !current && marked && "bg-amber-100 text-amber-800 border border-amber-300/80 dark:border-transparent dark:bg-amber-500/30 dark:text-amber-300 hover:bg-amber-200/80 dark:hover:bg-amber-500/40",
              )}
            >
              {idx + 1}
              {marked && (
                <Bookmark
                  size={8}
                  className="absolute top-0.5 right-0.5 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400"
                  aria-hidden
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

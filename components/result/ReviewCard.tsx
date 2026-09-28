"use client";

import { clsx } from "clsx";
import { CheckCircle2, XCircle, Minus, Bookmark, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ALL_TOPICS } from "@/lib/constants";
import type { Question, AnswerKey } from "@/types";

interface ReviewCardProps {
  question: Question;
  index: number;
  userAnswer: AnswerKey | undefined;
  isMarked: boolean;
}

export function ReviewCard({
  question,
  index,
  userAnswer,
  isMarked,
}: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isCorrect = userAnswer !== undefined && userAnswer === question.answer;
  const isSkipped = userAnswer === undefined;

  let StatusIcon: typeof CheckCircle2;
  let statusColor: string;
  let statusText: string;

  if (isSkipped) {
    StatusIcon = Minus;
    statusColor = "text-slate-500 dark:text-slate-400";
    statusText = "Bỏ trống";
  } else if (isCorrect) {
    StatusIcon = CheckCircle2;
    statusColor = "text-emerald-600 dark:text-emerald-400";
    statusText = "Đúng";
  } else {
    StatusIcon = XCircle;
    statusColor = "text-red-600 dark:text-red-400";
    statusText = "Sai";
  }

  const topicLabel =
    ALL_TOPICS.find((t) => t.id === question.topic)?.label ?? question.topic;

  return (
    <div
      className={clsx(
        "rounded-xl border overflow-hidden transition-all",
        isCorrect && "border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-500/20 dark:bg-emerald-500/5",
        isSkipped && "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/30",
        !isCorrect && !isSkipped && "border-red-300/80 bg-red-50/60 dark:border-red-500/20 dark:bg-red-500/5",
      )}
    >
      {/* Header */}
      <button
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-controls={`review-${question.id}`}
      >
        <span className="flex-shrink-0 text-xs font-mono text-slate-500 dark:text-slate-400 pt-0.5 w-6 font-semibold">
          {index + 1}.
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed line-clamp-2">
            {question.question.replace(/```[\s\S]*?```/g, "[code]").replace(/\*\*/g, "")}
          </p>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className={clsx("flex items-center gap-1 text-xs font-semibold", statusColor)}>
              <StatusIcon size={13} aria-hidden />
              {statusText}
            </span>
            {!isSkipped && !isCorrect && (
              <span className="text-xs text-slate-500">
                → Đúng: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{question.answer}</span>
              </span>
            )}
            {isMarked && (
              <Bookmark size={12} className="text-amber-500 fill-amber-500 dark:text-amber-400 dark:fill-amber-400" aria-hidden />
            )}
            <span className="text-xs text-slate-500 dark:text-slate-400 ml-auto">{topicLabel}</span>
          </div>
        </div>
        {expanded ? (
          <ChevronUp size={16} className="flex-shrink-0 text-slate-500 mt-0.5" aria-hidden />
        ) : (
          <ChevronDown size={16} className="flex-shrink-0 text-slate-500 mt-0.5" aria-hidden />
        )}
      </button>

      {/* Detail */}
      {expanded && (
        <div id={`review-${question.id}`} className="px-4 pb-4 space-y-3 border-t border-slate-200 dark:border-white/5 pt-3">
          {/* Options */}
          <div className="space-y-2">
            {(["A", "B", "C", "D"] as AnswerKey[]).map((key) => (
              <div
                key={key}
                className={clsx(
                  "flex gap-2 p-2.5 rounded-lg text-xs",
                  key === question.answer && "bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30 font-medium",
                  key === userAnswer && key !== question.answer && "bg-red-100 text-red-900 border border-red-300 dark:bg-red-500/15 dark:text-red-300 dark:border-red-500/30 font-medium",
                  key !== question.answer && key !== userAnswer && "text-slate-600 dark:text-slate-400",
                )}
              >
                <span className="font-bold w-4 flex-shrink-0">{key}.</span>
                <span>{question.options[key]}</span>
                {key === question.answer && (
                  <CheckCircle2 size={13} className="ml-auto flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" aria-hidden />
                )}
                {key === userAnswer && key !== question.answer && (
                  <XCircle size={13} className="ml-auto flex-shrink-0 text-red-600 dark:text-red-400 mt-0.5" aria-hidden />
                )}
              </div>
            ))}
          </div>

          {/* Explanation */}
          <div className="rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-transparent p-3 text-xs text-slate-800 dark:text-slate-300 leading-relaxed">
            <p className="font-semibold text-slate-700 dark:text-slate-400 mb-1">Giải thích:</p>
            <p>{question.explanation}</p>
          </div>

          {question.tip && (
            <div className="flex gap-2 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
              <Lightbulb size={13} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-xs text-amber-900 dark:text-amber-300">{question.tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

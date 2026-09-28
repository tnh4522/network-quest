"use client";

import { clsx } from "clsx";
import { Clock3, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getGradeInfo, formatDuration, formatScore } from "@/lib/grading";
import type { AttemptResult } from "@/types";
import Link from "next/link";

interface ResultSummaryProps {
  result: AttemptResult;
  onRetry: () => void;
  onRetryWrong: () => void;
  onShare: () => void;
}

export function ResultSummary({
  result,
  onRetry,
  onRetryWrong,
  onShare,
}: ResultSummaryProps) {
  const gradeInfo = getGradeInfo(result.percentage);

  const stats = [
    {
      label: "Đúng",
      value: result.correct,
      of: result.total,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
      border: "border-emerald-200 dark:border-emerald-500/20",
    },
    {
      label: "Sai",
      value: result.wrong,
      of: result.total,
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-500/10",
      border: "border-red-200 dark:border-red-500/20",
    },
    {
      label: "Bỏ trống",
      value: result.skipped,
      of: result.total,
      color: "text-slate-600 dark:text-slate-400",
      bg: "bg-slate-50 dark:bg-slate-500/10",
      border: "border-slate-200 dark:border-slate-700",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Score circle */}
      <div className="text-center py-6">
        <div className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-full border-4 border-cyan-500/50 bg-white dark:bg-slate-900 shadow-xl shadow-cyan-500/10 mb-4 transition-colors">
          <span className="text-4xl font-black text-slate-900 dark:text-white">{formatScore(result.score)}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">/ 10 điểm</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">{gradeInfo.emoji}</span>
          <span className={clsx("text-xl font-bold", gradeInfo.colorClass)}>
            {gradeInfo.label}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mx-auto mt-2 leading-relaxed">
          {gradeInfo.feedback}
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map(({ label, value, of, color, bg, border }) => (
          <div
            key={label}
            className={clsx(
              "rounded-xl p-3 flex flex-col items-center gap-0.5 border shadow-sm dark:shadow-none transition-colors",
              bg,
              border,
            )}
          >
            <span className={clsx("text-xl font-bold", color)}>{value}</span>
            <span className="text-xs text-slate-500">/{of}</span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{label}</span>
          </div>
        ))}
      </div>

      {/* Duration */}
      <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
        <Clock3 size={14} aria-hidden />
        <span>Thời gian làm bài: {formatDuration(result.duration)}</span>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" onClick={onRetry} className="gap-2">
          <RefreshCw size={15} aria-hidden />
          Làm lại
        </Button>
        {result.wrong > 0 && (
          <Button variant="secondary" onClick={onRetryWrong}>
            Luyện câu sai ({result.wrong})
          </Button>
        )}
        <Button
          variant="ghost"
          onClick={onShare}
          className={result.wrong === 0 ? "col-span-2" : ""}
        >
          Sao chép kết quả
        </Button>
        <Link href="/" className={result.wrong === 0 ? "col-span-1" : "col-span-2"}>
          <Button variant="primary" className="w-full">
            Làm bài mới
          </Button>
        </Link>
      </div>
    </div>
  );
}

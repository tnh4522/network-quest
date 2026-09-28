"use client";

interface ProgressBarProps {
  answered: number;
  total: number;
  marked: number;
}

export function ProgressBar({ answered, total, marked }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;

  return (
    <div className="space-y-1.5" role="status" aria-label={`Tiến độ: ${answered}/${total} câu đã trả lời`}>
      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 font-medium">
        <span>{answered}/{total} câu đã làm</span>
        {marked > 0 && (
          <span className="text-amber-600 dark:text-amber-400 font-semibold">{marked} đánh dấu</span>
        )}
        <span>{pct}%</span>
      </div>
      <div
        className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={answered}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

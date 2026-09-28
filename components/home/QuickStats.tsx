/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { BookOpen, TrendingUp, Flame } from "lucide-react";
import { getUserProgress } from "@/lib/storage";
import type { UserProgress } from "@/types";

export function QuickStats() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getUserProgress());
  }, []);

  if (!progress || progress.totalAttempts === 0) return null;

  const stats = [
    {
      icon: BookOpen,
      label: "Bài đã làm",
      value: progress.totalAttempts.toString(),
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-50 dark:bg-cyan-500/10",
    },
    {
      icon: TrendingUp,
      label: "Điểm trung bình",
      value: `${progress.averageScore}/10`,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
    },
    {
      icon: Flame,
      label: "Chuỗi ngày học",
      value: `${progress.streak} ngày`,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map(({ icon: Icon, label, value, color, bg }) => (
        <div
          key={label}
          className={`rounded-xl p-3 ${bg} border border-slate-200 dark:border-white/5 flex flex-col items-center gap-1 shadow-sm dark:shadow-none transition-colors`}
        >
          <Icon size={18} className={color} aria-hidden />
          <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{value}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center font-medium">{label}</p>
        </div>
      ))}
    </div>
  );
}

/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { History, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getAttempts } from "@/lib/storage";
import { HistoryList } from "@/components/history/HistoryList";
import { ScoreChart } from "@/components/history/ScoreChart";
import type { AttemptResult } from "@/types";

export default function HistoryPage() {
  const [attempts, setAttempts] = useState<AttemptResult[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setAttempts(getAttempts());
    setMounted(true);
  }, []);

  if (!mounted) {
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

      {/* Header */}
      <div className="flex items-center gap-2">
        <History size={20} className="text-cyan-600 dark:text-cyan-400" aria-hidden />
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Lịch sử làm bài</h1>
        {attempts.length > 0 && (
          <span className="text-sm text-slate-500">({attempts.length} bài)</span>
        )}
      </div>

      {/* Score trend chart */}
      {attempts.length >= 2 && (
        <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm dark:shadow-none transition-colors">
          <ScoreChart attempts={attempts} />
        </div>
      )}

      {/* List */}
      <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm dark:shadow-none transition-colors">
        <HistoryList initialAttempts={attempts} />
      </div>
    </div>
  );
}

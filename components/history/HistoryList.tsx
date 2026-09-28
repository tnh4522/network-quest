"use client";

import { useState } from "react";
import { Trash2, Download, Upload, AlertTriangle } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatDuration, formatScore, getGradeInfo } from "@/lib/grading";
import { clearAllAttempts, exportHistoryJSON, importHistoryJSON, getAttempts } from "@/lib/storage";
import type { AttemptResult } from "@/types";
import { LEVELS } from "@/lib/constants";
import Link from "next/link";

const levelBadgeVariant: Record<string, "green" | "yellow" | "red" | "purple"> = {
  basic: "green",
  intermediate: "yellow",
  advanced: "red",
  mixed: "purple",
};

interface HistoryListProps {
  initialAttempts: AttemptResult[];
}

export function HistoryList({ initialAttempts }: HistoryListProps) {
  const [attempts, setAttempts] = useState<AttemptResult[]>(initialAttempts);
  const [confirmClear, setConfirmClear] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);

  function handleExport() {
    const json = exportHistoryJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `network-quest-history-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = importHistoryJSON(ev.target?.result as string);
      if (result.success) {
        setAttempts(getAttempts());
        setImportError(null);
      } else {
        setImportError(result.error ?? "Lỗi không xác định");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function handleClear() {
    clearAllAttempts();
    setAttempts([]);
    setConfirmClear(false);
  }

  if (attempts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Chưa có lịch sử làm bài.</p>
        <Link href="/">
          <Button variant="primary">Bắt đầu làm bài</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="outline" size="sm" onClick={handleExport} className="gap-1.5">
          <Download size={14} aria-hidden />
          Xuất JSON
        </Button>
        <label>
          <span
            className="inline-flex items-center justify-center gap-1.5 cursor-pointer px-3 py-1.5 text-sm rounded-lg transition-all border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-cyan-400 bg-transparent font-medium"
          >
            <Upload size={14} aria-hidden />
            Nhập JSON
          </span>
          <input
            type="file"
            accept="application/json"
            className="sr-only"
            onChange={handleImport}
            aria-label="Nhập lịch sử từ JSON"
          />
        </label>
        {confirmClear ? (
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 font-medium">
              <AlertTriangle size={13} aria-hidden />
              Xác nhận xóa toàn bộ?
            </span>
            <Button variant="danger" size="sm" onClick={handleClear}>
              Xóa
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setConfirmClear(false)}>
              Huỷ
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setConfirmClear(true)}
            className="ml-auto text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 gap-1.5"
          >
            <Trash2 size={14} aria-hidden />
            Xóa tất cả
          </Button>
        )}
      </div>

      {importError && (
        <p className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg px-3 py-2">
          Lỗi khi nhập: {importError}
        </p>
      )}

      {/* List */}
      <div className="space-y-2.5">
        {attempts.map((attempt) => {
          const grade = getGradeInfo(attempt.percentage);
          const levelLabel =
            LEVELS.find((l) => l.id === attempt.config.level)?.label ?? attempt.config.level;
          const modeLabel =
            attempt.config.mode === "practice" ? "Luyện tập" : "Thi thử";
          const dateStr = new Date(attempt.completedAt).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <Link
              key={attempt.attemptId}
              href={`/result/${attempt.attemptId}`}
              className="block rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/40 dark:hover:border-slate-500 dark:hover:bg-slate-800/70 transition-all p-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm dark:shadow-none"
              aria-label={`Xem kết quả: ${formatScore(attempt.score)}/10, ${dateStr}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <Badge variant={levelBadgeVariant[attempt.config.level]}>
                      {levelLabel}
                    </Badge>
                    <Badge variant="slate">{modeLabel}</Badge>
                    <Badge variant="slate">{attempt.total} câu</Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{dateStr}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Thời gian: {formatDuration(attempt.duration)}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={clsx("text-2xl font-black", grade.colorClass)}>
                    {formatScore(attempt.score)}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">/10</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">{grade.emoji} {grade.label}</p>
                </div>
              </div>

              {/* Mini stat bar */}
              <div className="mt-3 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                  style={{ width: `${attempt.percentage}%` }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{attempt.correct} đúng</span>
                <span className="text-red-600 dark:text-red-400 font-semibold">{attempt.wrong} sai</span>
                {attempt.skipped > 0 && (
                  <span>{attempt.skipped} bỏ trống</span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

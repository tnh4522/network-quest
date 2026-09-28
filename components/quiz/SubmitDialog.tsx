"use client";

import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SubmitDialogProps {
  unanswered: number;
  total: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export function SubmitDialog({
  unanswered,
  total,
  onConfirm,
  onCancel,
}: SubmitDialogProps) {
  const answered = total - unanswered;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-dialog-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
        onClick={onCancel}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-2xl transition-colors animate-fade-in-up">
        {/* Close */}
        <button
          onClick={onCancel}
          aria-label="Đóng"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 mb-4">
          <AlertTriangle size={24} className="text-amber-500 dark:text-amber-400" aria-hidden />
        </div>

        <h2
          id="submit-dialog-title"
          className="text-lg font-bold text-slate-900 dark:text-white mb-2"
        >
          Xác nhận nộp bài
        </h2>

        <div className="space-y-1.5 mb-6 text-sm text-slate-600 dark:text-slate-400">
          <p>
            Đã trả lời:{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{answered}</span> / {total} câu
          </p>
          {unanswered > 0 && (
            <p>
              Chưa trả lời:{" "}
              <span className="text-red-600 dark:text-red-400 font-semibold">{unanswered}</span> câu
            </p>
          )}
          {unanswered === 0 && (
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">Bạn đã trả lời đủ tất cả các câu!</p>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onCancel}
          >
            Quay lại
          </Button>
          <Button
            variant="primary"
            className="flex-1"
            onClick={onConfirm}
          >
            Nộp bài
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { Clock, AlertTriangle } from "lucide-react";
import { clsx } from "clsx";
import { EXAM_WARNING_TIME } from "@/lib/constants";

interface TimerProps {
  seconds: number;
  onExpire: () => void;
  onTick: () => void;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

export function Timer({ seconds, onExpire, onTick }: TimerProps) {
  const expiredRef = useRef(false);

  useEffect(() => {
    if (seconds <= 0) {
      if (!expiredRef.current) {
        expiredRef.current = true;
        onExpire();
      }
      return;
    }
    const id = setInterval(() => {
      onTick();
    }, 1000);
    return () => clearInterval(id);
  }, [seconds, onExpire, onTick]);

  const isWarning = seconds <= EXAM_WARNING_TIME;
  const isDanger = seconds <= 30;

  return (
    <div
      className={clsx(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm font-semibold transition-colors",
        isDanger
          ? "bg-red-50 text-red-700 border border-red-300 dark:bg-red-500/20 dark:text-red-400 dark:border-red-500/40 animate-pulse"
          : isWarning
          ? "bg-amber-50 text-amber-700 border border-amber-300 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30"
          : "bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
      )}
      role="timer"
      aria-label={`Thời gian còn lại: ${formatTime(seconds)}`}
      aria-live="off"
    >
      {isWarning ? (
        <AlertTriangle size={14} aria-hidden className="flex-shrink-0" />
      ) : (
        <Clock size={14} aria-hidden className="flex-shrink-0" />
      )}
      <span>{formatTime(seconds)}</span>
    </div>
  );
}

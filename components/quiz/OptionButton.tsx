"use client";

import { clsx } from "clsx";
import { CheckCircle2, XCircle } from "lucide-react";
import type { AnswerKey } from "@/types";

interface OptionButtonProps {
  optionKey: AnswerKey;
  text: string;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
  correctAnswer?: AnswerKey; // to show which was correct in practice mode
}

export function OptionButton({
  optionKey,
  text,
  selected,
  disabled,
  onClick,
  correctAnswer,
}: OptionButtonProps) {
  const revealed = disabled && correctAnswer !== undefined;

  const isCorrectAnswer = revealed && optionKey === correctAnswer;
  const isWrongSelected = revealed && selected && !isCorrectAnswer;
  const isUnselected = revealed && !selected && !isCorrectAnswer;

  const containerClass = clsx(
    "w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2",
    !disabled && "hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer",
    disabled && "cursor-default",
    // Not-revealed selected state
    !revealed && selected && "bg-cyan-50 border-cyan-500 text-slate-900 dark:bg-cyan-500/15 dark:border-cyan-500/60 dark:text-white font-medium shadow-sm",
    !revealed && !selected && "bg-white border-slate-200 text-slate-800 dark:bg-slate-800/40 dark:border-slate-700 dark:text-slate-300",
    // Revealed states
    revealed && isCorrectAnswer && "bg-emerald-50 border-emerald-500/70 text-emerald-950 dark:bg-emerald-500/15 dark:border-emerald-500/60 dark:text-emerald-300 font-medium",
    revealed && isWrongSelected && "bg-red-50 border-red-500/70 text-red-950 dark:bg-red-500/15 dark:border-red-500/60 dark:text-red-300 font-medium",
    revealed && isUnselected && "bg-slate-50/50 border-slate-200 text-slate-400 opacity-60 dark:bg-slate-800/20 dark:border-slate-700/40 dark:text-slate-500",
  );

  // Icon in revealed state
  let StatusIcon: React.ComponentType<{ size: number; className?: string; "aria-hidden"?: boolean }> | null = null;
  let iconClass = "";
  if (revealed) {
    if (isCorrectAnswer) {
      StatusIcon = CheckCircle2;
      iconClass = "text-emerald-600 dark:text-emerald-400";
    } else if (isWrongSelected) {
      StatusIcon = XCircle;
      iconClass = "text-red-600 dark:text-red-400";
    }
  }

  return (
    <button
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      disabled={disabled && !revealed}
      className={containerClass}
    >
      {/* Key badge */}
      <span
        className={clsx(
          "flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors",
          !revealed && selected && "bg-cyan-500 text-slate-950 shadow-sm",
          !revealed && !selected && "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent",
          revealed && isCorrectAnswer && "bg-emerald-500 text-white shadow-sm",
          revealed && isWrongSelected && "bg-red-500 text-white shadow-sm",
          revealed && isUnselected && "bg-slate-200/70 text-slate-400 dark:bg-slate-700/50 dark:text-slate-500",
        )}
        aria-hidden="true"
      >
        {optionKey}
      </span>

      {/* Option text */}
      <span className="flex-1 text-sm leading-relaxed pt-0.5">{text}</span>

      {/* Status icon (accessibility + visual) */}
      {StatusIcon && (
        <StatusIcon
          size={18}
          className={clsx("flex-shrink-0 mt-0.5", iconClass)}
          aria-hidden
        />
      )}
    </button>
  );
}

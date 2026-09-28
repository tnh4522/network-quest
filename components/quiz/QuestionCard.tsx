"use client";

import { Badge } from "@/components/ui/Badge";
import { ALL_TOPICS } from "@/lib/constants";
import type { Question } from "@/types";

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
}

const levelBadge = {
  basic: { variant: "green" as const, label: "Cơ bản" },
  intermediate: { variant: "yellow" as const, label: "Trung bình" },
  advanced: { variant: "red" as const, label: "Nâng cao" },
};

export function QuestionCard({ question, index, total }: QuestionCardProps) {
  const topicLabel =
    ALL_TOPICS.find((t) => t.id === question.topic)?.label ?? question.topic;
  const lvl = levelBadge[question.level];

  return (
    <div className="space-y-4">
      {/* Meta row */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium">
          Câu {index + 1}/{total}
        </span>
        <div className="flex gap-2">
          <Badge variant={lvl.variant}>{lvl.label}</Badge>
          <Badge variant="slate">{topicLabel}</Badge>
        </div>
      </div>

      {/* Question text – supports markdown-like rendering */}
      <div
        className="prose prose-sm max-w-none text-slate-900 dark:text-slate-100 leading-relaxed"
        aria-live="polite"
      >
        <QuestionText text={question.question} />
      </div>
    </div>
  );
}

// Simple inline renderer for code blocks and plain text
function QuestionText({ text }: { text: string }) {
  // Split on ```...``` blocks
  const parts = text.split(/(```[\s\S]*?```)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("```") && part.endsWith("```")) {
          const inner = part.slice(3, -3);
          const firstNewline = inner.indexOf("\n");
          const code =
            firstNewline >= 0 ? inner.slice(firstNewline + 1) : inner;
          return (
            <pre
              key={i}
              className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-slate-800 dark:text-slate-300 my-3"
            >
              <code>{code.trim()}</code>
            </pre>
          );
        }
        // Bold text **...**
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-slate-900 dark:text-slate-100 text-[0.95rem] leading-7">
            {boldParts.map((bp, j) => {
              if (bp.startsWith("**") && bp.endsWith("**")) {
                return (
                  <strong key={j} className="text-slate-950 dark:text-white font-bold">
                    {bp.slice(2, -2)}
                  </strong>
                );
              }
              return <span key={j}>{bp}</span>;
            })}
          </p>
        );
      })}
    </>
  );
}

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ALL_TOPICS } from "@/lib/constants";
import { getTopicSuggestions, getStrongTopics } from "@/lib/grading";
import type { TopicStat } from "@/types";
import { TrendingDown, TrendingUp } from "lucide-react";

interface TopicChartProps {
  topicStats: TopicStat[];
}

export function TopicChart({ topicStats }: TopicChartProps) {
  const chartData = topicStats.map((ts) => ({
    name:
      ALL_TOPICS.find((t) => t.id === ts.topic)?.label?.split(" ").slice(0, 2).join(" ") ??
      ts.topic,
    fullLabel: ALL_TOPICS.find((t) => t.id === ts.topic)?.label ?? ts.topic,
    pct: ts.percentage,
    correct: ts.correct,
    total: ts.total,
  }));

  const suggestions = getTopicSuggestions(topicStats);
  const strongTopics = getStrongTopics(topicStats);

  if (topicStats.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
        Phân tích theo chủ đề
      </h3>

      {/* Bar chart */}
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(100, 116, 139, 0.15)"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#64748b", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "#64748b", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.[0]) {
                  const d = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-xs text-slate-800 dark:text-slate-300 shadow-xl">
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">{d.fullLabel}</p>
                      <p>
                        Đúng: <strong className="text-cyan-600 dark:text-cyan-400">{d.correct}/{d.total}</strong> ({d.pct}%)
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="pct" radius={[4, 4, 0, 0]}>
              {chartData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={
                    entry.pct >= 80
                      ? "#10b981"
                      : entry.pct >= 60
                      ? "#06b6d4"
                      : entry.pct >= 40
                      ? "#f59e0b"
                      : "#ef4444"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="grid sm:grid-cols-2 gap-3">
        {strongTopics.length > 0 && (
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-3 shadow-sm dark:shadow-none transition-colors">
            <div className="flex items-center gap-1.5 mb-2">
              <TrendingUp size={14} className="text-emerald-600 dark:text-emerald-400" aria-hidden />
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Chủ đề mạnh</span>
            </div>
            <ul className="space-y-1">
              {strongTopics.map((t) => (
                <li key={t} className="text-xs text-slate-700 dark:text-slate-300">
                  • {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-3 shadow-sm dark:shadow-none transition-colors">
          <div className="flex items-center gap-1.5 mb-2">
            <TrendingDown size={14} className="text-red-600 dark:text-red-400" aria-hidden />
            <span className="text-xs font-semibold text-red-700 dark:text-red-400">Cần ôn tập</span>
          </div>
          <ul className="space-y-1">
            {suggestions.map((s, i) => (
              <li key={i} className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                • {s.replace(/\*\*/g, "")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

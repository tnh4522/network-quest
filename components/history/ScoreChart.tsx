"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { AttemptResult } from "@/types";
import { formatScore } from "@/lib/grading";

interface ScoreChartProps {
  attempts: AttemptResult[];
}

export function ScoreChart({ attempts }: ScoreChartProps) {
  if (attempts.length < 2) return null;

  const data = [...attempts]
    .reverse()
    .slice(-20) // last 20
    .map((a, i) => ({
      index: i + 1,
      score: a.score,
      date: new Date(a.completedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
      }),
    }));

  const avg =
    data.reduce((s, d) => s + d.score, 0) / data.length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
          Tiến bộ điểm số
        </h3>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          TB: <span className="text-cyan-600 dark:text-cyan-400 font-bold">{formatScore(avg)}/10</span>
        </span>
      </div>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.15)" />
            <XAxis
              dataKey="date"
              tick={{ fill: "#64748b", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 10]}
              ticks={[0, 2, 4, 6, 8, 10]}
              tick={{ fill: "#64748b", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.[0]) {
                  const d = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-xs shadow-xl">
                      <p className="text-slate-500 dark:text-slate-400">{d.date}</p>
                      <p className="text-cyan-600 dark:text-cyan-400 font-bold">{d.score}/10</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <ReferenceLine
              y={avg}
              stroke="rgba(8, 145, 178, 0.4)"
              strokeDasharray="4 4"
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#0891b2"
              strokeWidth={2}
              dot={{ fill: "#0891b2", r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#0891b2" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

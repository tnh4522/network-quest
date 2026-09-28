// =============================================================
//  Network Quest – Grading & Feedback (pure functions)
// =============================================================

import type { AttemptResult, TopicStat } from "@/types";
import { GRADE_THRESHOLDS } from "@/lib/constants";
import { ALL_TOPICS } from "@/lib/constants";

// ------------------------------------------------------------------
//  Grade type helpers
// ------------------------------------------------------------------

export interface GradeInfo {
  grade: AttemptResult["grade"];
  label: string;
  emoji: string;
  colorClass: string;
  feedback: string;
}

export function getGradeInfo(percentage: number): GradeInfo {
  if (percentage >= GRADE_THRESHOLDS.excellent) {
    return {
      grade: "excellent",
      label: "Xuất sắc",
      emoji: "🏆",
      colorClass: "text-emerald-500",
      feedback:
        "Bạn nắm vững kiến thức mạng máy tính ở mức độ này. Hãy tiếp tục thử thách bản thân với mức độ cao hơn!",
    };
  }
  if (percentage >= GRADE_THRESHOLDS.good) {
    return {
      grade: "good",
      label: "Khá",
      emoji: "👍",
      colorClass: "text-sky-500",
      feedback:
        "Bạn đã nắm được phần lớn kiến thức. Ôn lại các chủ đề còn yếu để tiến lên mức xuất sắc.",
    };
  }
  if (percentage >= GRADE_THRESHOLDS.average) {
    return {
      grade: "average",
      label: "Trung bình",
      emoji: "📚",
      colorClass: "text-amber-500",
      feedback:
        "Bạn đã hiểu được nền tảng cơ bản. Cần ôn luyện thêm để củng cố kiến thức.",
    };
  }
  return {
    grade: "needsWork",
    label: "Cần ôn lại",
    emoji: "💪",
    colorClass: "text-red-500",
    feedback:
      "Hãy ôn lại nền tảng từ đầu. Bắt đầu với mức Cơ bản và làm chậm từng chủ đề.",
  };
}

// ------------------------------------------------------------------
//  Suggestions based on weak topics
// ------------------------------------------------------------------

export function getTopicSuggestions(topicStats: TopicStat[]): string[] {
  const weakTopics = topicStats
    .filter((ts) => ts.percentage < 60 && ts.total >= 2)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 3);

  if (weakTopics.length === 0) {
    return ["Tất cả các chủ đề đều tốt! Hãy thử mức độ khó hơn."];
  }

  return weakTopics.map((ts) => {
    const topicLabel =
      ALL_TOPICS.find((t) => t.id === ts.topic)?.label ?? ts.topic;
    return `Ôn lại chủ đề **${topicLabel}** (${ts.percentage}% đúng – ${ts.correct}/${ts.total} câu)`;
  });
}

// ------------------------------------------------------------------
//  Strong topics
// ------------------------------------------------------------------

export function getStrongTopics(topicStats: TopicStat[]): string[] {
  return topicStats
    .filter((ts) => ts.percentage >= 80 && ts.total >= 2)
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3)
    .map((ts) => {
      const label =
        ALL_TOPICS.find((t) => t.id === ts.topic)?.label ?? ts.topic;
      return label;
    });
}

// ------------------------------------------------------------------
//  Format time duration
// ------------------------------------------------------------------

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s} giây`;
  return `${m} phút ${s > 0 ? `${s} giây` : ""}`.trim();
}

// ------------------------------------------------------------------
//  Score display helpers
// ------------------------------------------------------------------

export function formatScore(score: number): string {
  return score.toFixed(1);
}

export function formatPercentage(pct: number): string {
  return `${pct}%`;
}

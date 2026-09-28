// =============================================================
//  Network Quest – Shared TypeScript Types
// =============================================================

/** Mức độ câu hỏi */
export type Level = "basic" | "intermediate" | "advanced";

/** Chế độ làm bài */
export type QuizMode = "practice" | "exam";

/** Một câu hỏi trắc nghiệm */
export interface Question {
  id: string;
  level: Level;
  /** Chủ đề, ví dụ: "subnetting", "osi-model", "tcp-udp" */
  topic: string;
  /** Hỗ trợ markdown (code block, bảng, v.v.) */
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: "A" | "B" | "C" | "D";
  /** Giải thích chi tiết: vì sao đúng + vì sao các đáp án sai */
  explanation: string;
  /** Mẹo ghi nhớ (tùy chọn) */
  tip?: string;
}

// =============================================================
//  Quiz Configuration (người dùng chọn trước khi làm bài)
// =============================================================

export interface QuizConfig {
  level: Level | "mixed";
  topics: string[];        // [] = tất cả chủ đề
  questionCount: 10 | 20 | 30 | 50;
  mode: QuizMode;
  /** Thời gian tính bằng giây (chỉ dùng khi mode === "exam") */
  timeLimit: number;
}

// =============================================================
//  Quiz Session State (lưu trong Zustand + localStorage)
// =============================================================

export type AnswerKey = "A" | "B" | "C" | "D";

export interface QuizState {
  /** undefined = chưa chọn đáp án */
  answers: Record<string, AnswerKey | undefined>;
  /** Set ID câu đã đánh dấu xem lại */
  markedIds: string[];
  currentIndex: number;
  /** Thời gian còn lại (giây), null nếu không giới hạn */
  timeRemaining: number | null;
  /** Đã nộp bài chưa (exam mode) */
  submitted: boolean;
  /** Thời điểm bắt đầu làm bài (ISO string) */
  startedAt: string;
}

export interface ActiveQuiz {
  sessionId: string;
  config: QuizConfig;
  /** Thứ tự câu hỏi sau khi xáo trộn (lưu ID) */
  questionIds: string[];
  /** Seed dùng để tái hiện thứ tự đáp án */
  seed: number;
  state: QuizState;
}

// =============================================================
//  Attempt Result (lưu lịch sử)
// =============================================================

export interface TopicStat {
  topic: string;
  total: number;
  correct: number;
  /** 0–100 */
  percentage: number;
}

export interface AttemptResult {
  attemptId: string;
  config: QuizConfig;
  questionIds: string[];
  seed: number;
  answers: Record<string, AnswerKey | undefined>;
  markedIds: string[];
  /** Số câu đúng */
  correct: number;
  /** Số câu sai */
  wrong: number;
  /** Số câu bỏ trống */
  skipped: number;
  /** Tổng số câu */
  total: number;
  /** Điểm thang 10 */
  score: number;
  /** Phần trăm đúng */
  percentage: number;
  /** Thời gian làm bài (giây) */
  duration: number;
  /** Xếp loại */
  grade: "excellent" | "good" | "average" | "needsWork";
  topicStats: TopicStat[];
  /** Thời điểm hoàn thành (ISO string) */
  completedAt: string;
}

// =============================================================
//  History & Progress
// =============================================================

export interface DailyProgress {
  date: string; // YYYY-MM-DD
  attemptsCount: number;
  averageScore: number;
}

export interface UserProgress {
  totalAttempts: number;
  averageScore: number;
  /** Chuỗi ngày học liên tiếp */
  streak: number;
  lastStudiedAt: string | null;
}

// =============================================================
//  UI Helpers
// =============================================================

export type ReviewFilter = "all" | "wrong" | "skipped" | "marked";

export interface QuestionWithResult extends Question {
  userAnswer: AnswerKey | undefined;
  isCorrect: boolean;
  isSkipped: boolean;
  isMarked: boolean;
  /** Đáp án đúng sau khi xáo trộn (phục vụ re-render) */
  shuffledOptions?: { key: AnswerKey; text: string }[];
}

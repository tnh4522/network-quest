// =============================================================
//  Network Quest – Quiz Engine (pure functions, no side effects)
// =============================================================

import type { Question, QuizConfig, AnswerKey, AttemptResult, TopicStat } from "@/types";
import { GRADE_THRESHOLDS } from "@/lib/constants";

// ------------------------------------------------------------------
//  Seeded pseudo-random number generator (mulberry32)
// ------------------------------------------------------------------

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createSeed(): number {
  return Math.floor(Math.random() * 2 ** 31);
}

// ------------------------------------------------------------------
//  Shuffle array with a deterministic seed
// ------------------------------------------------------------------

export function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const rng = mulberry32(seed);
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ------------------------------------------------------------------
//  Select questions based on config
// ------------------------------------------------------------------

export function selectQuestions(
  allQuestions: Question[],
  config: QuizConfig,
  seed: number,
): Question[] {
  let pool = allQuestions;

  // Filter by level
  if (config.level !== "mixed") {
    pool = pool.filter((q) => q.level === config.level);
  }

  // Filter by topics (empty = all)
  if (config.topics.length > 0) {
    pool = pool.filter((q) => config.topics.includes(q.topic));
  }

  // Shuffle then take requested count
  const shuffled = shuffleWithSeed(pool, seed);
  return shuffled.slice(0, config.questionCount);
}

// ------------------------------------------------------------------
//  Shuffle options for a question (returns mapping old key → new key)
// ------------------------------------------------------------------

export interface ShuffledOptions {
  order: AnswerKey[]; // e.g. ['C', 'A', 'D', 'B'] - original keys in new order
  correctNewKey: AnswerKey; // which position (A/B/C/D) the correct answer lands at
}

export function shuffleOptions(
  question: Question,
  seed: number,
): ShuffledOptions {
  const KEYS: AnswerKey[] = ["A", "B", "C", "D"];
  const shuffledKeys = shuffleWithSeed(KEYS, seed + question.id.charCodeAt(0));
  const correctIdx = shuffledKeys.indexOf(question.answer);
  return {
    order: shuffledKeys,
    correctNewKey: KEYS[correctIdx],
  };
}

// ------------------------------------------------------------------
//  Score an attempt
// ------------------------------------------------------------------

export interface ScoredAnswer {
  questionId: string;
  userAnswer: AnswerKey | undefined;
  correctAnswer: AnswerKey;
  isCorrect: boolean;
  isSkipped: boolean;
}

export function scoreAttempt(
  questions: Question[],
  answers: Record<string, AnswerKey | undefined>,
): ScoredAnswer[] {
  return questions.map((q) => {
    const userAnswer = answers[q.id];
    const isSkipped = userAnswer === undefined;
    const isCorrect = !isSkipped && userAnswer === q.answer;
    return {
      questionId: q.id,
      userAnswer,
      correctAnswer: q.answer,
      isCorrect,
      isSkipped,
    };
  });
}

// ------------------------------------------------------------------
//  Analyze performance by topic
// ------------------------------------------------------------------

export function analyzeTopics(
  questions: Question[],
  answers: Record<string, AnswerKey | undefined>,
): TopicStat[] {
  const statsMap = new Map<string, { total: number; correct: number }>();

  for (const q of questions) {
    const existing = statsMap.get(q.topic) ?? { total: 0, correct: 0 };
    const isCorrect = answers[q.id] === q.answer;
    statsMap.set(q.topic, {
      total: existing.total + 1,
      correct: existing.correct + (isCorrect ? 1 : 0),
    });
  }

  return Array.from(statsMap.entries()).map(([topic, { total, correct }]) => ({
    topic,
    total,
    correct,
    percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
  }));
}

// ------------------------------------------------------------------
//  Build full AttemptResult
// ------------------------------------------------------------------

export function buildAttemptResult(
  attemptId: string,
  config: QuizConfig,
  questions: Question[],
  answers: Record<string, AnswerKey | undefined>,
  markedIds: string[],
  seed: number,
  durationSeconds: number,
): AttemptResult {
  const scored = scoreAttempt(questions, answers);
  const correct = scored.filter((s) => s.isCorrect).length;
  const skipped = scored.filter((s) => s.isSkipped).length;
  const wrong = scored.filter((s) => !s.isCorrect && !s.isSkipped).length;
  const total = questions.length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const score = Math.round((correct / total) * 10 * 10) / 10; // 1 decimal

  let grade: AttemptResult["grade"];
  if (percentage >= GRADE_THRESHOLDS.excellent) grade = "excellent";
  else if (percentage >= GRADE_THRESHOLDS.good) grade = "good";
  else if (percentage >= GRADE_THRESHOLDS.average) grade = "average";
  else grade = "needsWork";

  return {
    attemptId,
    config,
    questionIds: questions.map((q) => q.id),
    seed,
    answers,
    markedIds,
    correct,
    wrong,
    skipped,
    total,
    score,
    percentage,
    duration: durationSeconds,
    grade,
    topicStats: analyzeTopics(questions, answers),
    completedAt: new Date().toISOString(),
  };
}

// ------------------------------------------------------------------
//  Generate session ID
// ------------------------------------------------------------------

export function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

// =============================================================
//  Network Quest – localStorage Wrapper (SSR-safe)
// =============================================================

import type { AttemptResult, ActiveQuiz, UserProgress } from "@/types";
import { STORAGE_KEYS } from "@/lib/constants";

// ------------------------------------------------------------------
//  SSR guard
// ------------------------------------------------------------------

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function getItem<T>(key: string): T | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function setItem<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota exceeded
  }
}

function removeItem(key: string): void {
  if (!isBrowser()) return;
  localStorage.removeItem(key);
}

// ------------------------------------------------------------------
//  Attempts (lịch sử)
// ------------------------------------------------------------------

export function getAttempts(): AttemptResult[] {
  return getItem<AttemptResult[]>(STORAGE_KEYS.ATTEMPTS) ?? [];
}

export function saveAttempt(attempt: AttemptResult): void {
  const existing = getAttempts();
  // Avoid duplicates
  const filtered = existing.filter((a) => a.attemptId !== attempt.attemptId);
  setItem(STORAGE_KEYS.ATTEMPTS, [attempt, ...filtered]);
}

export function getAttemptById(attemptId: string): AttemptResult | null {
  const attempts = getAttempts();
  return attempts.find((a) => a.attemptId === attemptId) ?? null;
}

export function deleteAttempt(attemptId: string): void {
  const attempts = getAttempts().filter((a) => a.attemptId !== attemptId);
  setItem(STORAGE_KEYS.ATTEMPTS, attempts);
}

export function clearAllAttempts(): void {
  removeItem(STORAGE_KEYS.ATTEMPTS);
}

// ------------------------------------------------------------------
//  Active quiz (phiên đang làm)
// ------------------------------------------------------------------

export function getActiveQuiz(): ActiveQuiz | null {
  return getItem<ActiveQuiz>(STORAGE_KEYS.ACTIVE_QUIZ);
}

export function saveActiveQuiz(quiz: ActiveQuiz): void {
  setItem(STORAGE_KEYS.ACTIVE_QUIZ, quiz);
}

export function clearActiveQuiz(): void {
  removeItem(STORAGE_KEYS.ACTIVE_QUIZ);
}

// ------------------------------------------------------------------
//  User progress (tính từ lịch sử)
// ------------------------------------------------------------------

export function getUserProgress(): UserProgress {
  const attempts = getAttempts();

  if (attempts.length === 0) {
    return {
      totalAttempts: 0,
      averageScore: 0,
      streak: 0,
      lastStudiedAt: null,
    };
  }

  const averageScore =
    attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length;

  // Calculate streak (consecutive days)
  const sortedDates = attempts
    .map((a) => a.completedAt.slice(0, 10)) // YYYY-MM-DD
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort()
    .reverse();

  let streak = 0;
  const today = new Date().toISOString().slice(0, 10);
  let checkDate = today;

  for (const date of sortedDates) {
    if (date === checkDate) {
      streak++;
      const prev = new Date(checkDate);
      prev.setDate(prev.getDate() - 1);
      checkDate = prev.toISOString().slice(0, 10);
    } else {
      break;
    }
  }

  return {
    totalAttempts: attempts.length,
    averageScore: Math.round(averageScore * 10) / 10,
    streak,
    lastStudiedAt: attempts[0]?.completedAt ?? null,
  };
}

// ------------------------------------------------------------------
//  Export / Import JSON
// ------------------------------------------------------------------

export function exportHistoryJSON(): string {
  return JSON.stringify(getAttempts(), null, 2);
}

export function importHistoryJSON(json: string): { success: boolean; count: number; error?: string } {
  try {
    const data = JSON.parse(json) as AttemptResult[];
    if (!Array.isArray(data)) throw new Error("Dữ liệu phải là mảng");
    setItem(STORAGE_KEYS.ATTEMPTS, data);
    return { success: true, count: data.length };
  } catch (e) {
    return { success: false, count: 0, error: (e as Error).message };
  }
}

// ------------------------------------------------------------------
//  Theme
// ------------------------------------------------------------------

export function getThemePreference(): "dark" | "light" | null {
  return getItem<"dark" | "light">(STORAGE_KEYS.THEME);
}

export function saveThemePreference(theme: "dark" | "light"): void {
  setItem(STORAGE_KEYS.THEME, theme);
}

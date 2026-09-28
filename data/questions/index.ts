// =============================================================
//  Network Quest – Question Bank Index
// =============================================================

import type { Question } from "@/types";
import { basicQuestions } from "./basic";
import { intermediateQuestions } from "./intermediate";
import { advancedQuestions } from "./advanced";

export const ALL_QUESTIONS: Question[] = [
  ...basicQuestions,
  ...intermediateQuestions,
  ...advancedQuestions,
];

/** Get all questions (used in store / engine) */
export function getAllQuestions(): Question[] {
  return ALL_QUESTIONS;
}

// ------------------------------------------------------------------
//  Validation (run at build time / in tests)
// ------------------------------------------------------------------

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  stats: {
    total: number;
    basic: number;
    intermediate: number;
    advanced: number;
  };
}

export function validateQuestions(questions: Question[]): ValidationResult {
  const errors: string[] = [];
  const ids = new Set<string>();
  const VALID_ANSWERS = new Set(["A", "B", "C", "D"]);

  for (const q of questions) {
    // Unique ID
    if (ids.has(q.id)) {
      errors.push(`Duplicate ID: ${q.id}`);
    }
    ids.add(q.id);

    // Level
    if (!["basic", "intermediate", "advanced"].includes(q.level)) {
      errors.push(`${q.id}: invalid level "${q.level}"`);
    }

    // Answer
    if (!VALID_ANSWERS.has(q.answer)) {
      errors.push(`${q.id}: invalid answer "${q.answer}"`);
    }

    // All 4 options present
    for (const key of ["A", "B", "C", "D"] as const) {
      if (!q.options[key] || q.options[key].trim() === "") {
        errors.push(`${q.id}: missing option ${key}`);
      }
    }

    // Question text not empty
    if (!q.question.trim()) {
      errors.push(`${q.id}: empty question text`);
    }

    // Explanation not empty
    if (!q.explanation.trim()) {
      errors.push(`${q.id}: empty explanation`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    stats: {
      total: questions.length,
      basic: questions.filter((q) => q.level === "basic").length,
      intermediate: questions.filter((q) => q.level === "intermediate").length,
      advanced: questions.filter((q) => q.level === "advanced").length,
    },
  };
}

import { describe, it, expect } from "vitest";
import { ALL_QUESTIONS, validateQuestions } from "@/data/questions";
import { basicQuestions } from "@/data/questions/basic";
import { intermediateQuestions } from "@/data/questions/intermediate";
import { advancedQuestions } from "@/data/questions/advanced";

describe("Question Bank Validation", () => {
  it("should pass comprehensive validation on all questions", () => {
    const result = validateQuestions(ALL_QUESTIONS);
    if (!result.valid) {
      console.error("Validation errors:", result.errors);
    }
    expect(result.errors).toEqual([]);
    expect(result.valid).toBe(true);
  });

  it("should have at least 180 questions total", () => {
    expect(ALL_QUESTIONS.length).toBeGreaterThanOrEqual(180);
  });

  it("should have at least 60 basic questions", () => {
    expect(basicQuestions.length).toBeGreaterThanOrEqual(60);
  });

  it("should have at least 60 intermediate questions", () => {
    expect(intermediateQuestions.length).toBeGreaterThanOrEqual(60);
  });

  it("should have at least 60 advanced questions", () => {
    expect(advancedQuestions.length).toBeGreaterThanOrEqual(60);
  });

  it("should have roughly balanced answer distribution across options A, B, C, D", () => {
    for (const [tier, questions] of [
      ["basic", basicQuestions],
      ["intermediate", intermediateQuestions],
      ["advanced", advancedQuestions],
    ] as const) {
      const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
      for (const q of questions) {
        counts[q.answer] = (counts[q.answer] || 0) + 1;
      }

      console.log(`Tier ${tier} counts:`, counts);
      // Check each option has a reasonable share (at least 10 out of 60)
      for (const opt of ["A", "B", "C", "D"]) {
        expect(
          counts[opt],
          `${tier} option ${opt} count should be >= 10, got ${counts[opt]}`,
        ).toBeGreaterThanOrEqual(10);
      }
    }
  });
});

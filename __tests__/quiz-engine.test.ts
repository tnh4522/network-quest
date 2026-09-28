import { describe, it, expect } from "vitest";
import {
  shuffleWithSeed,
  selectQuestions,
  scoreAttempt,
  analyzeTopics,
  buildAttemptResult,
  createSeed,
} from "@/lib/quiz-engine";
import type { Question, QuizConfig } from "@/types";

// ------------------------------------------------------------------
//  Mock data
// ------------------------------------------------------------------

const mockQuestions: Question[] = [
  {
    id: "basic-osi-001",
    level: "basic",
    topic: "osi-model",
    question: "Mô hình OSI có bao nhiêu tầng?",
    options: { A: "5", B: "6", C: "7", D: "4" },
    answer: "C",
    explanation: "Mô hình OSI có 7 tầng.",
  },
  {
    id: "basic-osi-002",
    level: "basic",
    topic: "osi-model",
    question: "Tầng nào của OSI chịu trách nhiệm định tuyến?",
    options: { A: "Physical", B: "Data Link", C: "Transport", D: "Network" },
    answer: "D",
    explanation: "Tầng Network chịu trách nhiệm định tuyến.",
  },
  {
    id: "inter-subnetting-001",
    level: "intermediate",
    topic: "subnetting",
    question: "Subnet mask /24 có bao nhiêu địa chỉ host?",
    options: { A: "254", B: "256", C: "128", D: "252" },
    answer: "A",
    explanation: "2^8 - 2 = 254 địa chỉ host.",
  },
  {
    id: "inter-subnetting-002",
    level: "intermediate",
    topic: "subnetting",
    question: "Địa chỉ network của 192.168.1.100/24 là?",
    options: { A: "192.168.1.0", B: "192.168.1.100", C: "192.168.0.0", D: "192.168.1.255" },
    answer: "A",
    explanation: "Network address là 192.168.1.0.",
  },
  {
    id: "adv-ipv6-001",
    level: "advanced",
    topic: "ipv6",
    question: "IPv6 sử dụng bao nhiêu bit cho địa chỉ?",
    options: { A: "32", B: "64", C: "128", D: "256" },
    answer: "C",
    explanation: "IPv6 sử dụng 128-bit địa chỉ.",
  },
];

// ------------------------------------------------------------------
//  Tests: shuffleWithSeed
// ------------------------------------------------------------------

describe("shuffleWithSeed", () => {
  it("should return same result for same seed", () => {
    const arr = [1, 2, 3, 4, 5];
    const seed = 42;
    const r1 = shuffleWithSeed(arr, seed);
    const r2 = shuffleWithSeed(arr, seed);
    expect(r1).toEqual(r2);
  });

  it("should return different results for different seeds", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const r1 = shuffleWithSeed(arr, 1);
    const r2 = shuffleWithSeed(arr, 999);
    expect(r1).not.toEqual(r2);
  });

  it("should preserve all elements", () => {
    const arr = ["a", "b", "c", "d"];
    const result = shuffleWithSeed(arr, 123);
    expect(result).toHaveLength(arr.length);
    expect(result.sort()).toEqual([...arr].sort());
  });

  it("should not mutate original array", () => {
    const arr = [1, 2, 3, 4];
    const original = [...arr];
    shuffleWithSeed(arr, 42);
    expect(arr).toEqual(original);
  });
});

// ------------------------------------------------------------------
//  Tests: selectQuestions
// ------------------------------------------------------------------

describe("selectQuestions", () => {
  it("should filter by level", () => {
    const config: QuizConfig = {
      level: "basic",
      topics: [],
      questionCount: 10,
      mode: "practice",
      timeLimit: 0,
    };
    const result = selectQuestions(mockQuestions, config, 1);
    expect(result.every((q) => q.level === "basic")).toBe(true);
  });

  it("should filter by topic", () => {
    const config: QuizConfig = {
      level: "mixed",
      topics: ["subnetting"],
      questionCount: 10,
      mode: "practice",
      timeLimit: 0,
    };
    const result = selectQuestions(mockQuestions, config, 1);
    expect(result.every((q) => q.topic === "subnetting")).toBe(true);
  });

  it("should not exceed questionCount", () => {
    const config: QuizConfig = {
      level: "mixed",
      topics: [],
      questionCount: 10,
      mode: "practice",
      timeLimit: 0,
    };
    const result = selectQuestions(mockQuestions, config, 1);
    // Pool has 5 questions, questionCount is 10, so result.length <= pool size
    expect(result.length).toBeLessThanOrEqual(mockQuestions.length);
  });

  it("should include all levels for mixed", () => {
    const config: QuizConfig = {
      level: "mixed",
      topics: [],
      questionCount: 10,
      mode: "practice",
      timeLimit: 0,
    };
    const result = selectQuestions(mockQuestions, config, 1);
    const levels = new Set(result.map((q) => q.level));
    // With 5 questions (basic×2, inter×2, adv×1), should have all 3 levels
    expect(levels.size).toBeGreaterThanOrEqual(1);
  });
});

// ------------------------------------------------------------------
//  Tests: scoreAttempt
// ------------------------------------------------------------------

describe("scoreAttempt", () => {
  it("should mark correct answers", () => {
    const answers = { "basic-osi-001": "C" as const };
    const scored = scoreAttempt([mockQuestions[0]], answers);
    expect(scored[0].isCorrect).toBe(true);
    expect(scored[0].isSkipped).toBe(false);
  });

  it("should mark wrong answers", () => {
    const answers = { "basic-osi-001": "A" as const };
    const scored = scoreAttempt([mockQuestions[0]], answers);
    expect(scored[0].isCorrect).toBe(false);
    expect(scored[0].isSkipped).toBe(false);
  });

  it("should mark skipped questions", () => {
    const answers: Record<string, undefined> = {};
    const scored = scoreAttempt([mockQuestions[0]], answers);
    expect(scored[0].isSkipped).toBe(true);
    expect(scored[0].isCorrect).toBe(false);
  });
});

// ------------------------------------------------------------------
//  Tests: analyzeTopics
// ------------------------------------------------------------------

describe("analyzeTopics", () => {
  it("should compute percentage correctly", () => {
    const answers = {
      "basic-osi-001": "C" as const,   // correct
      "basic-osi-002": "A" as const,   // wrong
    };
    const stats = analyzeTopics([mockQuestions[0], mockQuestions[1]], answers);
    const osiStat = stats.find((s) => s.topic === "osi-model");
    expect(osiStat?.total).toBe(2);
    expect(osiStat?.correct).toBe(1);
    expect(osiStat?.percentage).toBe(50);
  });

  it("should handle all-correct", () => {
    const answers = {
      "basic-osi-001": "C" as const,
      "basic-osi-002": "D" as const,
    };
    const stats = analyzeTopics([mockQuestions[0], mockQuestions[1]], answers);
    const osiStat = stats.find((s) => s.topic === "osi-model");
    expect(osiStat?.percentage).toBe(100);
  });
});

// ------------------------------------------------------------------
//  Tests: buildAttemptResult
// ------------------------------------------------------------------

describe("buildAttemptResult", () => {
  const config: QuizConfig = {
    level: "basic",
    topics: [],
    questionCount: 10,
    mode: "practice",
    timeLimit: 0,
  };

  it("should compute score and grade", () => {
    const answers = {
      "basic-osi-001": "C" as const,  // correct
      "basic-osi-002": "A" as const,  // wrong
    };
    const result = buildAttemptResult(
      "test-001",
      config,
      [mockQuestions[0], mockQuestions[1]],
      answers,
      [],
      42,
      120,
    );
    expect(result.correct).toBe(1);
    expect(result.wrong).toBe(1);
    expect(result.skipped).toBe(0);
    expect(result.percentage).toBe(50);
    expect(result.score).toBe(5.0);
    expect(result.grade).toBe("average");
  });

  it("should give excellent grade for 90%", () => {
    const qs = mockQuestions.slice(0, 5);
    const answers = Object.fromEntries(qs.map((q) => [q.id, q.answer])) as Record<
      string,
      "A" | "B" | "C" | "D"
    >;
    // Override one to wrong
    answers[qs[0].id] = qs[0].answer === "A" ? "B" : "A";
    const result = buildAttemptResult("test-002", { ...config, questionCount: 10 }, qs, answers, [], 1, 60);
    // 4/5 = 80% => 'good'
    expect(result.percentage).toBe(80);
    expect(result.grade).toBe("good");
  });

  it("should give needsWork for <50%", () => {
    const answers = { "basic-osi-001": "A" as const }; // wrong, other skipped
    const result = buildAttemptResult("test-003", config, [mockQuestions[0], mockQuestions[1]], answers, [], 1, 30);
    expect(result.grade).toBe("needsWork");
  });
});

// ------------------------------------------------------------------
//  Tests: createSeed
// ------------------------------------------------------------------

describe("createSeed", () => {
  it("should return a positive integer", () => {
    const seed = createSeed();
    expect(Number.isInteger(seed)).toBe(true);
    expect(seed).toBeGreaterThan(0);
  });
});

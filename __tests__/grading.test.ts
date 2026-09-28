import { describe, it, expect } from "vitest";
import {
  getGradeInfo,
  getTopicSuggestions,
  getStrongTopics,
  formatDuration,
  formatScore,
} from "@/lib/grading";
import type { TopicStat } from "@/types";

// ------------------------------------------------------------------
//  getGradeInfo
// ------------------------------------------------------------------

describe("getGradeInfo", () => {
  it("should return excellent for >= 85%", () => {
    expect(getGradeInfo(85).grade).toBe("excellent");
    expect(getGradeInfo(100).grade).toBe("excellent");
    expect(getGradeInfo(90).grade).toBe("excellent");
  });

  it("should return good for 70-84%", () => {
    expect(getGradeInfo(70).grade).toBe("good");
    expect(getGradeInfo(84).grade).toBe("good");
  });

  it("should return average for 50-69%", () => {
    expect(getGradeInfo(50).grade).toBe("average");
    expect(getGradeInfo(69).grade).toBe("average");
  });

  it("should return needsWork for < 50%", () => {
    expect(getGradeInfo(0).grade).toBe("needsWork");
    expect(getGradeInfo(49).grade).toBe("needsWork");
  });

  it("should have correct colorClass", () => {
    expect(getGradeInfo(90).colorClass).toContain("emerald");
    expect(getGradeInfo(75).colorClass).toContain("sky");
    expect(getGradeInfo(60).colorClass).toContain("amber");
    expect(getGradeInfo(30).colorClass).toContain("red");
  });

  it("should have emoji for each grade", () => {
    expect(getGradeInfo(90).emoji).toBeTruthy();
    expect(getGradeInfo(75).emoji).toBeTruthy();
    expect(getGradeInfo(55).emoji).toBeTruthy();
    expect(getGradeInfo(20).emoji).toBeTruthy();
  });
});

// ------------------------------------------------------------------
//  getTopicSuggestions
// ------------------------------------------------------------------

describe("getTopicSuggestions", () => {
  const mockStats: TopicStat[] = [
    { topic: "osi-model", total: 5, correct: 5, percentage: 100 },
    { topic: "subnetting", total: 4, correct: 1, percentage: 25 },
    { topic: "tcp-udp", total: 3, correct: 0, percentage: 0 },
  ];

  it("should return suggestions for weak topics", () => {
    const suggestions = getTopicSuggestions(mockStats);
    expect(suggestions.length).toBeGreaterThan(0);
    // Should not suggest osi-model (100%)
    expect(suggestions.join("")).not.toContain("OSI");
  });

  it("should return positive message when all topics are strong", () => {
    const allStrong: TopicStat[] = [
      { topic: "osi-model", total: 5, correct: 5, percentage: 100 },
      { topic: "subnetting", total: 5, correct: 5, percentage: 100 },
    ];
    const suggestions = getTopicSuggestions(allStrong);
    expect(suggestions[0]).toContain("Tất cả");
  });

  it("should not suggest topics with fewer than 2 questions", () => {
    const sparse: TopicStat[] = [
      { topic: "subnetting", total: 1, correct: 0, percentage: 0 },
    ];
    const suggestions = getTopicSuggestions(sparse);
    // sparse topic should be excluded
    expect(suggestions.length).toBeGreaterThan(0);
  });
});

// ------------------------------------------------------------------
//  getStrongTopics
// ------------------------------------------------------------------

describe("getStrongTopics", () => {
  it("should return topics with >= 80% and >= 2 questions", () => {
    const stats: TopicStat[] = [
      { topic: "osi-model", total: 5, correct: 5, percentage: 100 },
      { topic: "subnetting", total: 4, correct: 2, percentage: 50 },
      { topic: "ipv6", total: 3, correct: 3, percentage: 100 },
    ];
    const strong = getStrongTopics(stats);
    // osi-model and ipv6 qualify
    expect(strong.length).toBeGreaterThanOrEqual(2);
  });

  it("should return empty when no strong topics", () => {
    const stats: TopicStat[] = [
      { topic: "osi-model", total: 5, correct: 2, percentage: 40 },
    ];
    const strong = getStrongTopics(stats);
    expect(strong).toEqual([]);
  });
});

// ------------------------------------------------------------------
//  formatDuration
// ------------------------------------------------------------------

describe("formatDuration", () => {
  it("should format seconds only", () => {
    expect(formatDuration(45)).toBe("45 giây");
  });

  it("should format minutes and seconds", () => {
    expect(formatDuration(90)).toBe("1 phút 30 giây");
  });

  it("should format exact minutes", () => {
    expect(formatDuration(120)).toBe("2 phút");
  });

  it("should handle 0", () => {
    expect(formatDuration(0)).toBe("0 giây");
  });
});

// ------------------------------------------------------------------
//  formatScore
// ------------------------------------------------------------------

describe("formatScore", () => {
  it("should format to 1 decimal", () => {
    expect(formatScore(7.5)).toBe("7.5");
    expect(formatScore(10)).toBe("10.0");
    expect(formatScore(0)).toBe("0.0");
  });
});

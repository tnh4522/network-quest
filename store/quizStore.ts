// =============================================================
//  Network Quest – Zustand Quiz Store
// =============================================================

import { create } from "zustand";
import type { Question, QuizConfig, AnswerKey, ActiveQuiz } from "@/types";
import {
  shuffleWithSeed,
  selectQuestions,
  generateSessionId,
  createSeed,
} from "@/lib/quiz-engine";
import { saveActiveQuiz, clearActiveQuiz } from "@/lib/storage";
import { EXAM_TIME_LIMITS } from "@/lib/constants";
import { getAllQuestions } from "@/data/questions";

// ------------------------------------------------------------------
//  Store shape
// ------------------------------------------------------------------

interface QuizStore {
  // Current quiz session
  sessionId: string | null;
  config: QuizConfig | null;
  questions: Question[];
  seed: number;

  // Progress
  currentIndex: number;
  answers: Record<string, AnswerKey | undefined>;
  markedIds: string[];
  timeRemaining: number | null;
  submitted: boolean;
  startedAt: string | null;

  // Actions
  startQuiz: (config: QuizConfig) => void;
  resumeQuiz: (quiz: ActiveQuiz, allQuestions: Question[]) => void;
  setAnswer: (questionId: string, answer: AnswerKey) => void;
  setCurrentIndex: (index: number) => void;
  toggleMark: (questionId: string) => void;
  tickTimer: () => void;
  submitQuiz: () => void;
  resetQuiz: () => void;

  // Computed helpers
  getCurrentQuestion: () => Question | null;
  getAnsweredCount: () => number;
  getUnansweredCount: () => number;
}

// ------------------------------------------------------------------
//  Store implementation
// ------------------------------------------------------------------

export const useQuizStore = create<QuizStore>()((set, get) => ({
  // Initial state
  sessionId: null,
  config: null,
  questions: [],
  seed: 0,
  currentIndex: 0,
  answers: {},
  markedIds: [],
  timeRemaining: null,
  submitted: false,
  startedAt: null,

  // ------------------------------------------------------------------
  startQuiz: (config: QuizConfig) => {
    const seed = createSeed();
    const allQ = getAllQuestions();
    const selected = selectQuestions(allQ, config, seed);
    const shuffled = shuffleWithSeed(selected, seed);
    const sessionId = generateSessionId();
    const startedAt = new Date().toISOString();
    const timeRemaining =
      config.mode === "exam"
        ? (EXAM_TIME_LIMITS[config.questionCount] ?? 30 * 60)
        : null;

    const newState = {
      sessionId,
      config,
      questions: shuffled,
      seed,
      currentIndex: 0,
      answers: {} as Record<string, AnswerKey | undefined>,
      markedIds: [] as string[],
      timeRemaining,
      submitted: false,
      startedAt,
    };

    set(newState);

    // Persist to localStorage
    saveActiveQuiz({
      sessionId,
      config,
      questionIds: shuffled.map((q) => q.id),
      seed,
      state: {
        answers: {},
        markedIds: [],
        currentIndex: 0,
        timeRemaining,
        submitted: false,
        startedAt,
      },
    });
  },

  // ------------------------------------------------------------------
  resumeQuiz: (quiz: ActiveQuiz, allQuestions: Question[]) => {
    const questionMap = new Map(allQuestions.map((q) => [q.id, q]));
    const questions = quiz.questionIds
      .map((id) => questionMap.get(id))
      .filter((q): q is Question => q !== undefined);

    set({
      sessionId: quiz.sessionId,
      config: quiz.config,
      questions,
      seed: quiz.seed,
      currentIndex: quiz.state.currentIndex,
      answers: quiz.state.answers,
      markedIds: quiz.state.markedIds,
      timeRemaining: quiz.state.timeRemaining,
      submitted: quiz.state.submitted,
      startedAt: quiz.state.startedAt,
    });
  },

  // ------------------------------------------------------------------
  setAnswer: (questionId: string, answer: AnswerKey) => {
    set((state) => {
      const newAnswers = { ...state.answers, [questionId]: answer };
      // Persist
      if (state.sessionId && state.config) {
        saveActiveQuiz({
          sessionId: state.sessionId,
          config: state.config,
          questionIds: state.questions.map((q) => q.id),
          seed: state.seed,
          state: {
            answers: newAnswers,
            markedIds: state.markedIds,
            currentIndex: state.currentIndex,
            timeRemaining: state.timeRemaining,
            submitted: state.submitted,
            startedAt: state.startedAt ?? new Date().toISOString(),
          },
        });
      }
      return { answers: newAnswers };
    });
  },

  // ------------------------------------------------------------------
  setCurrentIndex: (index: number) => {
    set((state) => {
      if (state.sessionId && state.config) {
        saveActiveQuiz({
          sessionId: state.sessionId,
          config: state.config,
          questionIds: state.questions.map((q) => q.id),
          seed: state.seed,
          state: {
            answers: state.answers,
            markedIds: state.markedIds,
            currentIndex: index,
            timeRemaining: state.timeRemaining,
            submitted: state.submitted,
            startedAt: state.startedAt ?? new Date().toISOString(),
          },
        });
      }
      return { currentIndex: index };
    });
  },

  // ------------------------------------------------------------------
  toggleMark: (questionId: string) => {
    set((state) => {
      const newMarked = state.markedIds.includes(questionId)
        ? state.markedIds.filter((id) => id !== questionId)
        : [...state.markedIds, questionId];
      if (state.sessionId && state.config) {
        saveActiveQuiz({
          sessionId: state.sessionId,
          config: state.config,
          questionIds: state.questions.map((q) => q.id),
          seed: state.seed,
          state: {
            answers: state.answers,
            markedIds: newMarked,
            currentIndex: state.currentIndex,
            timeRemaining: state.timeRemaining,
            submitted: state.submitted,
            startedAt: state.startedAt ?? new Date().toISOString(),
          },
        });
      }
      return { markedIds: newMarked };
    });
  },

  // ------------------------------------------------------------------
  tickTimer: () => {
    set((state) => {
      if (state.timeRemaining === null || state.timeRemaining <= 0)
        return state;
      return { timeRemaining: state.timeRemaining - 1 };
    });
  },

  // ------------------------------------------------------------------
  submitQuiz: () => {
    set({ submitted: true });
    clearActiveQuiz();
  },

  // ------------------------------------------------------------------
  resetQuiz: () => {
    clearActiveQuiz();
    set({
      sessionId: null,
      config: null,
      questions: [],
      seed: 0,
      currentIndex: 0,
      answers: {},
      markedIds: [],
      timeRemaining: null,
      submitted: false,
      startedAt: null,
    });
  },

  // ------------------------------------------------------------------
  getCurrentQuestion: () => {
    const { questions, currentIndex } = get();
    return questions[currentIndex] ?? null;
  },

  getAnsweredCount: () => {
    const { questions, answers } = get();
    return questions.filter((q) => answers[q.id] !== undefined).length;
  },

  getUnansweredCount: () => {
    const { questions, answers } = get();
    return questions.filter((q) => answers[q.id] === undefined).length;
  },
}));

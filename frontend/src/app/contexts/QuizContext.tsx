// src/app/context/QuizContext.tsx
'use client';

import { createContext, useContext, useReducer, useCallback } from 'react';
import type { Quiz, Question, QuizAttempt } from '@/app/types/quiz.types';

interface QuizState {
  currentQuiz: Quiz | null;
  currentQuestion: Question | null;
  currentAttempt: QuizAttempt | null;
  answers: Record<string, string>;
  questionIndex: number;
  isLoading: boolean;
  error: string | null;
  isPaused: boolean;
}

type QuizAction =
  | { type: 'SET_QUIZ'; payload: Quiz }
  | { type: 'SET_QUESTION'; payload: Question }
  | { type: 'SET_ANSWER'; payload: { questionId: string; answerId: string } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }
  | { type: 'START_ATTEMPT'; payload: QuizAttempt }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  currentQuiz: null,
  currentQuestion: null,
  currentAttempt: null,
  answers: {},
  questionIndex: 0,
  isLoading: false,
  error: null,
  isPaused: false,
};

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
  startQuiz: (quiz: Quiz) => void;
  submitAnswer: (questionId: string, answerId: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  submitQuiz: () => Promise<void>;
  togglePause: () => void;
} | undefined>(undefined);

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_QUIZ':
      return {
        ...state,
        currentQuiz: action.payload,
        currentQuestion: action.payload.questions[0],
        questionIndex: 0,
      };
    case 'SET_QUESTION':
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answerId,
        },
      };
    case 'NEXT_QUESTION':
      if (!state.currentQuiz) return state;
      const nextIndex = state.questionIndex + 1;
      if (nextIndex >= state.currentQuiz.questions.length) return state;
      return {
        ...state,
        questionIndex: nextIndex,
        currentQuestion: state.currentQuiz.questions[nextIndex],
      };
    case 'PREV_QUESTION':
      if (!state.currentQuiz) return state;
      const prevIndex = state.questionIndex - 1;
      if (prevIndex < 0) return state;
      return {
        ...state,
        questionIndex: prevIndex,
        currentQuestion: state.currentQuiz.questions[prevIndex],
      };
    case 'START_ATTEMPT':
      return {
        ...state,
        currentAttempt: action.payload,
        answers: {},
        questionIndex: 0,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'TOGGLE_PAUSE':
      return {
        ...state,
        isPaused: !state.isPaused,
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const startQuiz = useCallback((quiz: Quiz) => {
    dispatch({ type: 'SET_QUIZ', payload: quiz });
  }, []);

  const submitAnswer = useCallback((questionId: string, answerId: string) => {
    dispatch({
      type: 'SET_ANSWER',
      payload: { questionId, answerId },
    });
  }, []);

  const nextQuestion = useCallback(() => {
    dispatch({ type: 'NEXT_QUESTION' });
  }, []);

  const prevQuestion = useCallback(() => {
    dispatch({ type: 'PREV_QUESTION' });
  }, []);

  const submitQuiz = useCallback(async () => {
    // TODO: Implement quiz submission logic
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      // API call to submit quiz
      dispatch({ type: 'RESET_QUIZ' });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'เกิดข้อผิดพลาดในการส่งคำตอบ',
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const togglePause = useCallback(() => {
    dispatch({ type: 'TOGGLE_PAUSE' });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        state,
        dispatch,
        startQuiz,
        submitAnswer,
        nextQuestion,
        prevQuestion,
        submitQuiz,
        togglePause,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
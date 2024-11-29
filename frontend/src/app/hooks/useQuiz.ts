// app/hooks/useQuiz.ts
import { useState } from 'react';

interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  timeLimit: number;
}

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export const useQuiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuiz = async (quizId: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/quiz/${quizId}`);
      if (response.ok) {
        const quizData = await response.json();
        setCurrentQuiz(quizData);
      } else {
        throw new Error('Failed to fetch quiz');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error loading quiz');
    } finally {
      setLoading(false);
    }
  };

  return {
    currentQuiz,
    loading,
    error,
    fetchQuiz
  };
};
export type QuestionType = 'multiple-choice' | 'true-false' | 'matching';

export interface Choice {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  choices: Choice[];
  points: number;
  timeLimit?: number;
  imageUrl?: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  subject: string;
  creatorId: string;
  questions: Question[];
  totalPoints: number;
  timeLimit: number;
  passingScore: number;
  isPublished: boolean;
  allowReview: boolean;
  shuffleQuestions: boolean;
  shuffleChoices: boolean;
  createdAt: Date;
  updatedAt: Date;
  startDate?: Date;
  endDate?: Date;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  answers: {
    questionId: string;
    selectedChoiceId: string;
    timeSpent: number;
  }[];
  score: number;
  startedAt: Date;
  completedAt?: Date;
  timeSpent: number;
  status: 'in-progress' | 'completed' | 'abandoned';
}
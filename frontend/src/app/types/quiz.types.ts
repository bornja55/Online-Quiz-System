//app/types/quiz.types.ts

export type QuestionType = 'multiple-choice' | 'true-false' | 'matching';
export interface Question {
  id: number;
  text: string;
  choices: Choice[];
  correctAnswer: string;
  explanation: string;
  type: string; // ประเภทของคำถาม เช่น "multiple-choice"
  points: number; // คะแนนที่ได้จากคำถามนี้
  tags: string[]; // แท็กที่เกี่ยวข้องกับคำถาม
  difficulty: string; // ความยากของคำถาม เช่น "easy", "medium", "hard"
  imageUrl?: string; // เพิ่มคุณสมบัติ imageUrl (อาจจะเป็น optional)
}

export interface Choice {
  id: string;
  text: string;
  isCorrect?: boolean; // ตัวเลือกที่ถูกต้อง
  explanation: string;
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
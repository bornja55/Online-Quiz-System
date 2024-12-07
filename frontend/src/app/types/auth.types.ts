// app/types/auth.types.ts
import type { User } from './user.types'; // ตรวจสอบให้แน่ใจว่า User ถูกส่งออกจาก user.types.ts
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
  correctAnswer: string; // เพิ่มคุณสมบัตินี้
  explanation: string; // เพิ่มคุณสมบัตินี้
}

// ... (ส่วนอื่น ๆ ของโค้ด)

export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role: 'teacher' | 'student';
  acceptTerms: boolean;
}

// เพิ่ม RegisterFormData ที่นี่
export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role?: "teacher" | "student"; // เปลี่ยน role ให้เป็น optional  
  acceptTerms: boolean;
}

// ส่งออก User และ AuthState
export interface AuthState {
  user: User | null; // ตรวจสอบให้แน่ใจว่า User ถูกส่งออกจาก user.types.ts
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface PasswordReset {
  email: string;
  code: string;
  newPassword: string;
  confirmPassword: string;
}

export interface EmailVerification {
  email: string;
  code: string;
}
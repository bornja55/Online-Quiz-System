import type { User } from './user.types';

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

export interface AuthState {
  user: User | null;
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
export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  phoneNumber?: string;
  organization?: string;
  position?: string;
  bio?: string;
  preferences: {
    language: 'th' | 'en';
    theme: 'light' | 'dark';
    emailNotifications: boolean;
    lineNotifications: boolean;
  };
}

export interface UserStats {
  totalQuizzes: number;
  completedQuizzes: number;
  averageScore: number;
  totalTime: number;
  lastActive: Date;
  strengths: string[];
  weaknesses: string[];
}

export interface UserSettings {
  language: 'th' | 'en';
  theme: 'light' | 'dark';
  emailNotifications: boolean;
  lineNotifications: boolean;
}
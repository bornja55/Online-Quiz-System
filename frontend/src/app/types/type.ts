export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'teacher' | 'student';
  }
  
  export interface Quiz {
    id: string;
    title: string;
    questions: Question[];
  }
  
  export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
  }
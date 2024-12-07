// src/app/services/quiz.service.ts  
import { apiService } from './api.service';  
import type { Quiz, Question, QuizAttempt } from '@/app/types/quiz.types';  
import type { PaginationParams } from '@/app/types/api.types';  

class QuizService {  
  private readonly BASE_URL = '/quizzes';  

  async getQuizzes(params?: PaginationParams) {  
    return apiService.get<Quiz[]>(this.BASE_URL, params);  
  }  

  async getQuizById(id: string) {  
    return apiService.get<Quiz>(`${this.BASE_URL}/${id}`);  
  }  

  async createQuiz(data: Partial<Quiz>) {  
    return apiService.post<Quiz>(this.BASE_URL, data);  
  }  

  async updateQuiz(id: string, data: Partial<Quiz>) {  
    return apiService.put<Quiz>(`${this.BASE_URL}/${id}`, data);  
  }  

  async deleteQuiz(id: string) {  
    return apiService.delete(`${this.BASE_URL}/${id}`);  
  }  

  async addQuestion(quizId: string, question: Partial<Question>) {  
    return apiService.post<Question>(`${this.BASE_URL}/${quizId}/questions`, question);  
  }  

  async updateQuestion(quizId: string, questionId: string, data: Partial<Question>) {  
    return apiService.put<Question>(`${this.BASE_URL}/${quizId}/questions/${questionId}`, data);  
  }  

  async deleteQuestion(quizId: string, questionId: string) {  
    return apiService.delete(`${this.BASE_URL}/${quizId}/questions/${questionId}`);  
  }  

  async startQuiz(quizId: string) {  
    return apiService.post<QuizAttempt>(`${this.BASE_URL}/${quizId}/start`, {});  
  }  

  async submitAnswer(quizId: string, attemptId: string, data: {  
    questionId: string;  
    selectedChoiceId: string;  
    timeSpent: number;  
  }) {  
    return apiService.post(`${this.BASE_URL}/${quizId}/attempts/${attemptId}/answer`, data);  
  }  

  async finishQuiz(quizId: string, attemptId: string) {  
    return apiService.post<QuizAttempt>(`${this.BASE_URL}/${quizId}/attempts/${attemptId}/finish`, {});  
  }  

  async getQuizAttempts(quizId: string) {  
    return apiService.get<QuizAttempt[]>(`${this.BASE_URL}/${quizId}/attempts`);  
  }  

  async getQuizAttempt(quizId: string, attemptId: string) {  
    return apiService.get<QuizAttempt>(`${this.BASE_URL}/${quizId}/attempts/${attemptId}`);  
  }  
}  

export const quizService = new QuizService();  
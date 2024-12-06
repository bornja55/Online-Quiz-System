import { apiService } from './api.service';
import type { PaginationParams } from '@/app/types/api.types';

class ReportService {
  private readonly BASE_URL = '/reports';

  async getQuizReport(quizId: string) {
    return apiService.get(`${this.BASE_URL}/quiz/${quizId}`);
  }

  async getUserReport(userId: string) {
    return apiService.get(`${this.BASE_URL}/user/${userId}`);
  }

  async getOverallStats() {
    return apiService.get(`${this.BASE_URL}/stats`);
  }

  async exportQuizReport(quizId: string, format: 'pdf' | 'excel') {
    return apiService.get(`${this.BASE_URL}/quiz/${quizId}/export`, { format });
  }

  async exportUserReport(userId: string, format: 'pdf' | 'excel') {
    return apiService.get(`${this.BASE_URL}/user/${userId}/export`, { format });
  }

  async getQuizAnalytics(quizId: string) {
    return apiService.get(`${this.BASE_URL}/quiz/${quizId}/analytics`);
  }

  async getUserAnalytics(userId: string) {
    return apiService.get(`${this.BASE_URL}/user/${userId}/analytics`);
  }

  async getComparisonReport(params: {
    quizIds?: string[];
    userIds?: string[];
    dateRange?: {
      start: Date;
      end: Date;
    };
  }) {
    return apiService.get(`${this.BASE_URL}/comparison`, params);
  }
}

export const reportService = new ReportService();
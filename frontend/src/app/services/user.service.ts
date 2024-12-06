import { apiService } from './api.service';
import type { User, UserProfile, UserStats } from '@/app/types/user.types';
import type { PaginationParams } from '@/app/types/api.types';

class UserService {
  private readonly BASE_URL = '/users';

  async getUsers(params?: PaginationParams) {
    return apiService.get<User[]>(this.BASE_URL, params);
  }

  async getUserById(id: string) {
    return apiService.get<User>(`${this.BASE_URL}/${id}`);
  }

  async updateUser(id: string, data: Partial<User>) {
    return apiService.put<User>(`${this.BASE_URL}/${id}`, data);
  }

  async deleteUser(id: string) {
    return apiService.delete(`${this.BASE_URL}/${id}`);
  }

  async getUserProfile(id: string) {
    return apiService.get<UserProfile>(`${this.BASE_URL}/${id}/profile`);
  }

  async updateUserProfile(id: string, data: Partial<UserProfile>) {
    return apiService.put<UserProfile>(`${this.BASE_URL}/${id}/profile`, data);
  }

  async getUserStats(id: string) {
    return apiService.get<UserStats>(`${this.BASE_URL}/${id}/stats`);
  }

  async updatePassword(id: string, data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) {
    return apiService.put(`${this.BASE_URL}/${id}/password`, data);
  }

  async updateSettings(id: string, data: {
    language: 'th' | 'en';
    theme: 'light' | 'dark';
    emailNotifications: boolean;
    lineNotifications: boolean;
  }) {
    return apiService.put(`${this.BASE_URL}/${id}/settings`, data);
  }
}

export const userService = new UserService();
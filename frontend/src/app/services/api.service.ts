import { ApiResponse, ApiError } from '@/app/types/api.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiService {
  private async request<T>(config: {
    method: string;
    url: string;
    data?: any;
    params?: any;
  }): Promise<ApiResponse<T>> {
    try {
      const { method, url, data, params } = config;
      const headers = {
        'Content-Type': 'application/json',
        // Add auth header if needed
      };

      const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
      const response = await fetch(`${API_BASE_URL}${url}${queryString}`, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
      });

      if (!response.ok) {
        throw await response.json();
      }

      return await response.json();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): ApiError {
    return {
      code: error.code || 'UNKNOWN_ERROR',
      message: error.message || 'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ',
      status: error.status || 500,
      details: error.details,
    };
  }

  public async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'GET', url, params });
  }

  public async post<T>(url: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'POST', url, data });
  }

  public async put<T>(url: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'PUT', url, data });
  }

  public async delete<T>(url: string): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'DELETE', url });
  }
}

export const apiService = new ApiService();
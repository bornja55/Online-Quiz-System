import type { ApiResponse } from '@/app/types/api.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiService {
  private async request<T>(config: {
    method: string;
    url: string;
    data?: any;
    params?: any;
  }): Promise<ApiResponse<T>> {
    const { method, url, data, params } = config;

    try {
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
        throw new Error('API request failed');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
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

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface ApiError {
  code: string; // รหัสข้อผิดพลาด
  message: string; // ข้อความข้อผิดพลาด
  status: number; // สถานะ HTTP
  details?: any; // รายละเอียดเพิ่มเติมเกี่ยวกับข้อผิดพลาด
}
 
export interface PaginationParams {  
  page: number;  
  limit: number;  
}   
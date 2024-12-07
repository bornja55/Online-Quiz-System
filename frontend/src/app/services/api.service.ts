// src/app/services/api.service.ts  
import type { ApiResponse, ApiError } from '@/app/types/api.types';  

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
      };  

      const queryString = params  
        ? `?${new URLSearchParams(params).toString()}`  
        : '';  

      const response = await fetch(`${API_BASE_URL}${url}${queryString}`, {  
        method,  
        headers,  
        body: data ? JSON.stringify(data) : undefined,  
      });  

      if (!response.ok) {  
        const errorData = await response.json();  
        throw this.handleError(errorData, response.status);  
      }  

      return await response.json();  
    } catch (error) {  
      throw this.handleError(error);  
    }  
  }  

  private handleError(error: any, status?: number): ApiError {  
    if (error instanceof TypeError) {  
      return {  
        code: 'NETWORK_ERROR',  
        message: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',  
        status: 503,  
      };  
    }  

    return {  
      code: error.code || 'UNKNOWN_ERROR',  
      message: error.message || 'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ',  
      status: status || error.status || 500,  
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
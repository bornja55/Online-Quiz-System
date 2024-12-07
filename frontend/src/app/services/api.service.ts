// src/app/services/api.service.ts  
import { ApiResponse, ApiError } from '@/app/types/api.types';  

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';  

class ApiService {  
  private async request<T>(config: {  
    method: string;  
    url: string;  
    data?: any;  
    params?: any;  
    headers?: Record<string, string>;  
  }): Promise<ApiResponse<T>> {  
    const { method, url, data, params, headers } = config;  

    try {  
      // Default headers  
      const defaultHeaders = {  
        'Content-Type': 'application/json',  
      };  

      // Merge custom headers  
      const finalHeaders = { ...defaultHeaders, ...headers };  

      // Handle query string  
      const queryString = params  
        ? `?${new URLSearchParams(params).toString()}`  
        : '';  

      // Make the request  
      const response = await fetch(`${API_BASE_URL}${url}${queryString}`, {  
        method,  
        headers: finalHeaders,  
        body: data ? JSON.stringify(data) : undefined,  
      });  

      // Check if the response is not OK  
      if (!response.ok) {  
        const errorData = await response.json();  
        throw this.handleError(errorData, response.status);  
      }  

      // Return the JSON response  
      return await response.json();  
    } catch (error) {  
      // Handle network or unexpected errors  
      throw this.handleError(error);  
    }  
  }  

  private handleError(error: any, status?: number): ApiError {  
    // Handle network errors or unexpected errors  
    if (error instanceof TypeError) {  
      return {  
        code: 'NETWORK_ERROR',  
        message: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',  
        status: 503,  
      };  
    }  

    // Handle API errors  
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
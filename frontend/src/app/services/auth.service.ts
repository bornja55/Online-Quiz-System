// src/app/services/auth.service.ts  
import { LoginCredentials, RegisterFormData, User } from '@/app/types/auth.types';  

class AuthService {  
  private baseUrl = process.env.NEXT_PUBLIC_API_URL;  

  async login(credentials: LoginCredentials): Promise<User> {  
    try {  
      const response = await fetch(`${this.baseUrl}/auth/login`, {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify(credentials),  
      });  

      if (!response.ok) {  
        const error = await response.json();  
        throw new Error(error.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ');  
      }  

      const data = await response.json();  
      return data.user;  
    } catch (error) {  
      throw error;  
    }  
  }  

  async register(data: RegisterFormData): Promise<User> {  
    try {  
      const response = await fetch(`${this.baseUrl}/auth/register`, {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify(data),  
      });  

      if (!response.ok) {  
        const error = await response.json();  
        throw new Error(error.message || 'เกิดข้อผิดพลาดในการลงทะเบียน');  
      }  

      const result = await response.json();  
      return result.user;  
    } catch (error) {  
      throw error;  
    }  
  }  

  async logout(): Promise<void> {  
    try {  
      const response = await fetch(`${this.baseUrl}/auth/logout`, {  
        method: 'POST',  
        credentials: 'include',  
      });  

      if (!response.ok) {  
        throw new Error('เกิดข้อผิดพลาดในการออกจากระบบ');  
      }  
    } catch (error) {  
      throw error;  
    }  
  }  

  async getCurrentUser(): Promise<User | null> {  
    try {  
      const response = await fetch(`${this.baseUrl}/auth/me`, {  
        credentials: 'include',  
      });  

      if (!response.ok) {  
        if (response.status === 401) {  
          return null;  
        }  
        throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้');  
      }  

      const data = await response.json();  
      return data.user;  
    } catch (error) {  
      return null;  
    }  
  }  

  async updateProfile(userId: string, data: Partial<User>): Promise<User> {  
    try {  
      const response = await fetch(`${this.baseUrl}/users/${userId}`, {  
        method: 'PATCH',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        credentials: 'include',  
        body: JSON.stringify(data),  
      });  

      if (!response.ok) {  
        const error = await response.json();  
        throw new Error(error.message || 'เกิดข้อผิดพลาดในการอัพเดทโปรไฟล์');  
      }  

      const result = await response.json();  
      return result.user;  
    } catch (error) {  
      throw error;  
    }  
  }  

  async changePassword(userId: string, oldPassword: string, newPassword: string): Promise<void> {  
    try {  
      const response = await fetch(`${this.baseUrl}/users/${userId}/password`, {  
        method: 'PUT',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        credentials: 'include',  
        body: JSON.stringify({ oldPassword, newPassword }),  
      });  

      if (!response.ok) {  
        const error = await response.json();  
        throw new Error(error.message || 'เกิดข้อผิดพลาดในการเปลี่ยนรหัสผ่าน');  
      }  
    } catch (error) {  
      throw error;  
    }  
  }  
}  

export const authService = new AuthService();  
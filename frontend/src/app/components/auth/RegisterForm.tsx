'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/app/components/shared/Button';
import { Card } from '@/app/components/shared/Card';
import type { RegisterFormData } from '@/types/auth.types';

interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function RegisterForm({ onSuccess, onError }: RegisterFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: 'student',
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validation
      if (formData.password !== formData.confirmPassword) {
        throw new Error('รหัสผ่านไม่ตรงกัน');
      }

      if (!formData.acceptTerms) {
        throw new Error('กรุณายอมรับข้อตกลงและเงื่อนไข');
      }

      // TODO: Implement actual registration logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      onSuccess?.();
      router.push('/auth/login');
    } catch (error) {
      onError?.(error instanceof Error ? error.message : 'เกิดข้อผิดพลาดในการลงทะเบียน');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              อีเมล
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              ชื่อ-นามสกุล
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="ชื่อ นามสกุล"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              ประเภทผู้ใช้
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="student">นักเรียน/นักศึกษา</option>
              <option value="teacher">อาจารย์/ผู้สอน</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              รหัสผ่าน
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              ยืนยันรหัสผ่าน
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
              ยอมรับ{' '}
              <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                ข้อตกลงและเงื่อนไข
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
          </Button>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">มีบัญชีอยู่แล้ว? </span>
            <Link
              href="/auth/login"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </form>
      </div>
    </Card>
  );
}
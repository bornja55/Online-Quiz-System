'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { Button } from '@/app/components/shared/Button';
import { Card } from '@/app/components/shared/Card';
import type { LoginCredentials } from '@/types/auth.types';

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement login logic with API
      toast.success('เข้าสู่ระบบสำเร็จ');
      router.push('/dashboard');
    } catch (error) {
      toast.error('เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              อีเมล
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@email.com"
              disabled={isLoading}
            />
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
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={credentials.remember}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                disabled={isLoading}
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                จดจำฉัน
              </label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              ลืมรหัสผ่าน?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </Button>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              ยังไม่มีบัญชี?{' '}
              <Link
                href="/auth/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                สมัครสมาชิก
              </Link>
            </span>
          </div>
        </form>
      </div>
    </Card>
  );
}
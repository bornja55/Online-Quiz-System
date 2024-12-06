// src/app/auth/login/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import LoginForm from '@/app/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">เข้าสู่ระบบ</h2>
          <p className="mt-2 text-sm text-gray-600">
            หรือ{' '}
            <Link href="/auth/register" className="text-blue-600 hover:text-blue-500">
              สมัครสมาชิกใหม่
            </Link>
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
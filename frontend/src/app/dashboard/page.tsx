'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/shared/Card';

interface DashboardStats {
  totalQuizzes: number;
  completedQuizzes: number;
  averageScore: number;
}

export default function DashboardPage() {
  const [stats, setStats] = React.useState<DashboardStats>({
    totalQuizzes: 10,
    completedQuizzes: 5,
    averageScore: 85
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">แผงควบคุม</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card title="แบบทดสอบทั้งหมด">
          <p className="text-3xl font-bold text-blue-600">{stats.totalQuizzes}</p>
        </Card>

        <Card title="ทำแล้ว">
          <p className="text-3xl font-bold text-green-600">{stats.completedQuizzes}</p>
        </Card>

        <Card title="คะแนนเฉลี่ย">
          <p className="text-3xl font-bold text-purple-600">{stats.averageScore}%</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="แบบทดสอบล่าสุด">
          <div className="space-y-4">
            <Link href="/quiz/1" className="block p-4 hover:bg-gray-50 rounded-lg">
              <h3 className="font-semibold">คณิตศาสตร์ บทที่ 1</h3>
              <p className="text-sm text-gray-600">เวลา: 60 นาที</p>
            </Link>
            <Link href="/quiz/2" className="block p-4 hover:bg-gray-50 rounded-lg">
              <h3 className="font-semibold">วิทยาศาสตร์ บทที่ 2</h3>
              <p className="text-sm text-gray-600">เวลา: 45 นาที</p>
            </Link>
          </div>
        </Card>

        <Card title="ผลการสอบล่าสุด">
          <div className="space-y-4">
            <div className="p-4 border-b">
              <h3 className="font-semibold">คณิตศาสตร์ บทที่ 1</h3>
              <p className="text-sm text-gray-600">คะแนน: 85%</p>
            </div>
            <div className="p-4 border-b">
              <h3 className="font-semibold">วิทยาศาสตร์ บทที่ 1</h3>
              <p className="text-sm text-gray-600">คะแนน: 90%</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
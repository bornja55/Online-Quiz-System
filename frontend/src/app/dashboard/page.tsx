'use client';

import { useState } from 'react';
import { Card } from '@/app/components/shared/Card';
import Link from 'next/link';

export default function DashboardPage() {
  const [stats] = useState({
    totalQuizzes: 10,
    completedQuizzes: 5,
    averageScore: 85,
    lastQuizDate: '2024-01-15'
  });

  const [recentQuizzes] = useState([
    { id: 1, title: 'คณิตศาสตร์ บทที่ 1', score: 90, date: '2024-01-15' },
    { id: 2, title: 'วิทยาศาสตร์ บทที่ 2', score: 85, date: '2024-01-14' },
    { id: 3, title: 'ภาษาอังกฤษ บทที่ 1', score: 80, date: '2024-01-13' }
  ]);

  const [availableQuizzes] = useState([
    { id: 4, title: 'คณิตศาสตร์ บทที่ 2', duration: '30 นาที', questions: 20 },
    { id: 5, title: 'วิทยาศาสตร์ บทที่ 3', duration: '45 นาที', questions: 30 },
    { id: 6, title: 'ภาษาอังกฤษ บทที่ 2', duration: '40 นาที', questions: 25 }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">แดชบอร์ด</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-600">แบบทดสอบทั้งหมด</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalQuizzes}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-600">ทำแล้ว</h3>
            <p className="text-3xl font-bold text-green-600">{stats.completedQuizzes}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-600">คะแนนเฉลี่ย</h3>
            <p className="text-3xl font-bold text-purple-600">{stats.averageScore}%</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-600">ทำล่าสุดเมื่อ</h3>
            <p className="text-3xl font-bold text-orange-600">{stats.lastQuizDate}</p>
          </div>
        </Card>
      </div>

      {/* Recent Quizzes */}
      <div className="mb-8">
        <Card title="แบบทดสอบที่ทำล่าสุด">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ชื่อแบบทดสอบ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    คะแนน
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    วันที่
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentQuizzes.map((quiz) => (
                  <tr key={quiz.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{quiz.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{quiz.score}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">{quiz.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Available Quizzes */}
      <div>
        <Card title="แบบทดสอบที่พร้อมทำ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableQuizzes.map((quiz) => (
              <div key={quiz.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">{quiz.title}</h3>
                <div className="text-sm text-gray-600">
                  <p>ระยะเวลา: {quiz.duration}</p>
                  <p>จำนวนข้อ: {quiz.questions}</p>
                </div>
                <Link 
                  href={`/quiz/${quiz.id}`}
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  เริ่มทำแบบทดสอบ
                </Link>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
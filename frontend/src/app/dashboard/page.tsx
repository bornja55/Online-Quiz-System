'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/app/components/shared/Card';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Types
interface Stats {
  totalQuizzes: number;
  completedQuizzes: number;
  averageScore: number;
  lastQuizDate: string;
}

interface Quiz {
  id: number;
  title: string;
  score?: number;
  date?: string;
  duration?: string;
  questions?: number;
}

// Components
const StatCard = ({ title, value, color }: { title: string; value: string | number; color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card>
      <div className="text-center p-6">
        <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
      </div>
    </Card>
  </motion.div>
);

const RecentQuizTable = ({ quizzes }: { quizzes: Quiz[] }) => (
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
        {quizzes.map((quiz) => (
          <motion.tr
            key={quiz.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <td className="px-6 py-4 whitespace-nowrap">{quiz.title}</td>
            <td className="px-6 py-4 whitespace-nowrap">{quiz.score}%</td>
            <td className="px-6 py-4 whitespace-nowrap">{quiz.date}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  </div>
);

const QuizCard = ({ quiz }: { quiz: Quiz }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 bg-white"
  >
    <h3 className="font-semibold mb-3 text-lg">{quiz.title}</h3>
    <div className="text-sm text-gray-600 space-y-2">
      <p className="flex items-center">
        <span className="w-24">ระยะเวลา:</span>
        <span className="font-medium">{quiz.duration}</span>
      </p>
      <p className="flex items-center">
        <span className="w-24">จำนวนข้อ:</span>
        <span className="font-medium">{quiz.questions} ข้อ</span>
      </p>
    </div>
    <Link 
      href={`/quiz/${quiz.id}`}
      className="mt-4 inline-block w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      เริ่มทำแบบทดสอบ
    </Link>
  </motion.div>
);

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [stats, setStats] = useState<Stats>({
    totalQuizzes: 10,
    completedQuizzes: 5,
    averageScore: 85,
    lastQuizDate: '2024-01-15'
  });

  const [recentQuizzes, setRecentQuizzes] = useState<Quiz[]>([
    { id: 1, title: 'คณิตศาสตร์ บทที่ 1', score: 90, date: '2024-01-15' },
    { id: 2, title: 'วิทยาศาสตร์ บทที่ 2', score: 85, date: '2024-01-14' },
    { id: 3, title: 'ภาษาอังกฤษ บทที่ 1', score: 80, date: '2024-01-13' }
  ]);

  const [availableQuizzes, setAvailableQuizzes] = useState<Quiz[]>([
    { id: 4, title: 'คณิตศาสตร์ บทที่ 2', duration: '30 นาที', questions: 20 },
    { id: 5, title: 'วิทยาศาสตร์ บทที่ 3', duration: '45 นาที', questions: 30 },
    { id: 6, title: 'ภาษาอังกฤษ บทที่ 2', duration: '40 นาที', questions: 25 }
  ]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">เกิดข้อผิดพลาด: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold mb-8"
      >
        แดชบอร์ด
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="แบบทดสอบทั้งหมด" value={stats.totalQuizzes} color="text-blue-600" />
        <StatCard title="ทำแล้ว" value={stats.completedQuizzes} color="text-green-600" />
        <StatCard title="คะแนนเฉลี่ย" value={`${stats.averageScore}%`} color="text-purple-600" />
        <StatCard title="ทำล่าสุดเมื่อ" value={stats.lastQuizDate} color="text-orange-600" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Card title="แบบทดสอบที่ทำล่าสุด">
          <RecentQuizTable quizzes={recentQuizzes} />
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card title="แบบทดสอบที่พร้อมทำ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
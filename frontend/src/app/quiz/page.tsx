'use client';

import { useState } from 'react'; // เหลือแค่ import เดียว
import Link from 'next/link';
import { Card } from '@/app/components/shared/Card';

interface Quiz {
  id: string;
  title: string;
  description: string;
  duration: number;
  totalQuestions: number;
}

export default function QuizPage() {
  const [quizzes] = useState<Quiz[]>([
    {
      id: '1',
      title: 'คณิตศาสตร์ บทที่ 1',
      description: 'แบบทดสอบเรื่องการบวก ลบ คูณ หาร',
      duration: 60,
      totalQuestions: 30
    },
    {
      id: '2',
      title: 'วิทยาศาสตร์ บทที่ 1',
      description: 'แบบทดสอบเรื่องระบบสุริยะ',
      duration: 45,
      totalQuestions: 25
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">แบบทดสอบที่เปิดให้สอบ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} title={quiz.title}>
            <p className="text-gray-600 mb-4">{quiz.description}</p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>เวลา: {quiz.duration} นาที</p>
              <p>จำนวนข้อ: {quiz.totalQuestions} ข้อ</p>
            </div>
            <Link 
              href={`/quiz/${quiz.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              เริ่มทำแบบทดสอบ
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
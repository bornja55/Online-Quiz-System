// src/app/components/dashboard/RecentQuizzes.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/shared/Card';

interface Quiz {
  id: string;
  title: string;
  subject: string;
  completedAt: string;
  score: number;
  totalQuestions: number;
}

interface RecentQuizzesProps {
  quizzes: Quiz[];
}

const RecentQuizzes: React.FC<RecentQuizzesProps> = ({ quizzes }) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">แบบทดสอบล่าสุด</h2>
        <Link 
          href="/quiz"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          ดูทั้งหมด
        </Link>
      </div>
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">{quiz.title}</h3>
              <p className="text-sm text-gray-500">{quiz.subject}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {quiz.score}/{quiz.totalQuestions}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(quiz.completedAt).toLocaleDateString('th-TH')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentQuizzes;
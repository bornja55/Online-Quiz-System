// src/app/components/quiz/QuizProgress.tsx
'use client';

import React from 'react';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredQuestions: number[];
}

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  answeredQuestions,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">
          ความคืบหน้า: {answeredQuestions.length}/{totalQuestions} ข้อ
        </span>
        <span className="text-sm text-gray-600">
          {Math.round((answeredQuestions.length / totalQuestions) * 100)}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{
            width: `${(answeredQuestions.length / totalQuestions) * 100}%`,
          }}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-full text-sm font-medium
              ${
                i + 1 === currentQuestion
                  ? 'bg-blue-500 text-white'
                  : answeredQuestions.includes(i + 1)
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }
            `}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizProgress;
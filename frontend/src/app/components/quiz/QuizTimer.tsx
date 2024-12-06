// src/app/components/quiz/QuizTimer.tsx
'use client';

import { useEffect, useState } from 'react';
import { useQuiz } from '@/app/context/QuizContext';

interface QuizTimerProps {
  initialTime: number; // เวลาในวินาที
  onTimeUp: () => void;
  className?: string;
}

export default function QuizTimer({ initialTime, onTimeUp, className = '' }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const { isPaused } = useQuiz();

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, isPaused]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const pad = (num: number): string => num.toString().padStart(2, '0');

    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
    }
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  const getColorClass = (): string => {
    const percentage = (timeLeft / initialTime) * 100;
    if (percentage > 50) return 'text-green-600';
    if (percentage > 25) return 'text-yellow-600';
    return 'text-red-600 animate-pulse';
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className={`font-mono text-lg font-bold ${getColorClass()}`}>
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
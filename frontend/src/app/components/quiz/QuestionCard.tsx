// src/app/components/quiz/QuestionCard.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/app/components/shared/Button';
import { Card } from '@/app/components/shared/Card';
import type { Question, Choice } from '@/app/types/quiz.types';

interface QuestionCardProps {
  question: Question;
  currentNumber: number;
  totalQuestions: number;
  selectedChoice?: string;
  timeLeft?: number;
  onAnswer: (choiceId: string) => void;
  onNext?: () => void;
  onPrevious?: () => void;
  isReview?: boolean;
  isLoading?: boolean;
}

export default function QuestionCard({
  question,
  currentNumber,
  totalQuestions,
  selectedChoice,
  timeLeft,
  onAnswer,
  onNext,
  onPrevious,
  isReview = false,
  isLoading = false,
}: QuestionCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setShowExplanation(false);
  }, [question.id]);

  const handleChoiceSelect = (choiceId: string) => {
    if (!isReview) {
      onAnswer(choiceId);
    }
  };

  const getChoiceClassName = (choice: Choice) => {
    const baseClass = 'p-4 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer';
    if (!selectedChoice) return `${baseClass} border-gray-200 hover:border-blue-500`;
    if (isReview) {
      if (choice.isCorrect) return `${baseClass} border-green-500 bg-green-50`;
      if (selectedChoice === choice.id && !choice.isCorrect) {
        return `${baseClass} border-red-500 bg-red-50`;
      }
    }
    return selectedChoice === choice.id
      ? `${baseClass} border-blue-500 bg-blue-50`
      : `${baseClass} border-gray-200 hover:border-blue-500`;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm font-medium text-gray-600">
            คำถามที่ {currentNumber} จาก {totalQuestions}
          </div>
          {timeLeft !== undefined && (
            <div className="text-sm font-medium text-gray-600">
              เวลาที่เหลือ: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(currentNumber / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question Text */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
        </div>

        {/* Choices */}
        <div className="space-y-4 mb-6">
          {question.choices.map((choice) => (
            <div
              key={choice.id}
              className={getChoiceClassName(choice)}
              onClick={() => handleChoiceSelect(choice.id)}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={selectedChoice === choice.id}
                  onChange={() => handleChoiceSelect(choice.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  disabled={isReview}
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  {choice.text}
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Explanation (Review Mode) */}
        {isReview && question.explanation && (
          <div className="mb-6">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium focus:outline-none"
            >
              {showExplanation ? 'ซ่อนคำอธิบาย' : 'แสดงคำอธิบาย'}
            </button>
            {showExplanation && (
              <div className="mt-2 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
                {question.explanation}
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            onClick={onPrevious}
            disabled={currentNumber === 1 || isLoading}
            variant="outline"
          >
            ข้อก่อนหน้า
          </Button>
          <Button
            onClick={onNext}
            disabled={!selectedChoice || isLoading}
          >
            {currentNumber === totalQuestions ? 'ส่งคำตอบ' : 'ข้อถัดไป'}
          </Button>
        </div>
      </div>
    </Card>
  );
}
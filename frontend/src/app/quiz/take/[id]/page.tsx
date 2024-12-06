// ในไฟล์ app/quiz/take/[id]/page.tsx
'use client';

import QuestionCard from '@/app/components/quiz/QuestionCard';
import { useState } from 'react';

const question = {
  id: 1,
  text: "1 + 1 = ?",
  choices: [
    { id: 'a', text: '1' },
    { id: 'b', text: '2' },
    { id: 'c', text: '3' },
    { id: 'd', text: '4' }
  ],
  correctAnswer: 'b',
  explanation: "1 บวก 1 เท่ากับ 2"
};

export default function QuizPage() {
  const [selectedChoice, setSelectedChoice] = useState<string | undefined>(undefined);
  const currentNumber = 1; // หมายเลขคำถามปัจจุบัน
  const totalQuestions = 10; // จำนวนคำถามทั้งหมด

  const handleAnswer = (choiceId: string) => {
    setSelectedChoice(choiceId);
    console.log("คำตอบที่เลือก:", choiceId);
  };

  return (
    <QuestionCard
      question={question} // ส่ง props question
      currentNumber={currentNumber} // ส่ง currentNumber
      totalQuestions={totalQuestions} // ส่ง totalQuestions
      selectedChoice={selectedChoice} // ส่ง selectedChoice
      onAnswer={handleAnswer} // ส่งฟังก์ชัน onAnswer
      onNext={() => console.log("ไปยังคำถามถัดไป")} // ฟังก์ชันสำหรับไปยังคำถามถัดไป
      onPrevious={() => console.log("กลับไปยังคำถามก่อนหน้า")} // ฟังก์ชันสำหรับกลับไปยังคำถามก่อนหน้า
    />
  );
}
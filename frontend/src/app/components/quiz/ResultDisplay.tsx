// src/app/components/quiz/ResultDisplay.tsx
import React from 'react';

interface ResultDisplayProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ score, totalQuestions, onRetake }) => {
  return (
    <div className="result-display">
      <h1>ผลลัพธ์ของคุณ</h1>
      <p>คุณได้คะแนน: {score} จาก {totalQuestions} คะแนน</p>
      <button onClick={onRetake}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  );
};

export default ResultDisplay;
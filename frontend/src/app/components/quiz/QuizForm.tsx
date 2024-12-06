// src/app/components/quiz/QuizForm.tsx
"use client";

import React, { useState } from 'react';
import { quizService } from '@/app/services/quiz.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Question } from '@/app/types/quiz.types'; // นำเข้าประเภท Question

const QuizForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', choices: ['', ''], imageUrl: '', correctAnswer: '', explanation: '' }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', choices: ['', ''], imageUrl: '', correctAnswer: '', explanation: '' }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // แปลงข้อมูลคำถามให้ตรงตามประเภท Question
      const formattedQuestions: Question[] = questions.map((q, index) => ({
        id: `question-${index + 1}`, // สร้าง ID สำหรับคำถาม
        type: 'multiple-choice', // กำหนดประเภทคำถาม
        text: q.question, // ใช้ข้อความคำถาม
        choices: q.choices.map((choice, choiceIndex) => ({
          id: `choice-${index + 1}-${choiceIndex + 1}`, // สร้าง ID สำหรับตัวเลือก
          text: choice,
          isCorrect: choice === q.correctAnswer, // กำหนดว่าเป็นตัวเลือกที่ถูกต้องหรือไม่
          explanation: q.explanation || '', // สามารถเพิ่มคำอธิบายได้ถ้าต้องการ
        })),
        points: 1, // กำหนดคะแนน
        timeLimit: undefined, // กำหนดเวลาจำกัด
        imageUrl: q.imageUrl || undefined, // กำหนด URL รูปภาพ
        tags: [], // กำหนดแท็ก
        difficulty: 'easy', // กำหนดระดับความยาก
        correctAnswer: q.correctAnswer, // เพิ่มคุณสมบัติ correctAnswer
        explanation: q.explanation || '', // เพิ่มคุณสมบัติ explanation
      }));

      await quizService.createQuiz({ title, questions: formattedQuestions });
      toast.success('Quiz created successfully!');
    } catch (error) {
      toast.error('Failed to create quiz.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      {questions.map((q, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Question"
            value={q.question}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].question = e.target.value;
              setQuestions(newQuestions);
            }}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={q.imageUrl}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].imageUrl = e.target.value;
              setQuestions(newQuestions);
            }}
          />
          {q.choices.map((choice, choiceIndex) => (
            <input
              key={choiceIndex}
              type="text"
              placeholder={`Choice ${choiceIndex + 1}`}
              value={choice}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[index].choices[choiceIndex] = e.target.value;
                setQuestions(newQuestions);
              }}
              required
            />
          ))}
          <select
            value={q.correctAnswer}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].correctAnswer = e.target.value;
              setQuestions(newQuestions);
            }}
            required
          >
            <option value="" disabled>Select Correct Answer</option>
            {q.choices.map((choice, choiceIndex) => (
              <option key={choiceIndex} value={choice}>{choice}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Explanation"
            value={q.explanation}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].explanation = e.target.value;
              setQuestions(newQuestions);
            }}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddQuestion}>Add Question</button>
      <button type="submit">Create Quiz</button>
      <ToastContainer />
    </form>
  );
};

export default QuizForm;
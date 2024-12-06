// src/app/components/quiz/QuizForm.tsx
"use client";

import React, { useState } from 'react';
import { quizService } from '@/app/services/quiz.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Question } from '@/app/types/quiz.types'; // นำเข้าประเภท Question

const QuizForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([{
    id: 1, // ID เริ่มต้น
    text: '',
    choices: ['', ''],
    correctAnswer: '',
    explanation: '',
    points: 1,
    tags: [],
    difficulty: 'easy',
    type: 'multiple-choice',
    imageUrl: '',
  }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, {
      id: questions.length + 1, // สร้าง ID ใหม่
      text: '',
      choices: ['', ''],
      correctAnswer: '',
      explanation: '',
      points: 1,
      tags: [],
      difficulty: 'easy',
      type: 'multiple-choice',
      imageUrl: '',
    }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // แปลงข้อมูลคำถามให้ตรงตามประเภท Question
      const formattedQuestions: Question[] = questions.map((q) => ({
        id: q.id,
        text: q.text,
        choices: q.choices.map((choice, choiceIndex) => ({
          id: `choice-${q.id}-${choiceIndex + 1}`,
          text: choice,
          isCorrect: choice === q.correctAnswer,
          explanation: q.explanation || '',
        })),
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || '',
        points: q.points,
        tags: q.tags,
        difficulty: q.difficulty,
        type: q.type,
        imageUrl: q.imageUrl || undefined,
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
            value={q.text}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].text = e.target.value;
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
          <input
            type="number"
            placeholder="Points"
            value={q.points}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].points = Number(e.target.value);
              setQuestions(newQuestions);
            }}
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={q.tags.join(', ')}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].tags = e.target.value.split(',').map(tag => tag.trim());
              setQuestions(newQuestions);
            }}
          />
          <select
            value={q.difficulty}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].difficulty = e.target.value;
              setQuestions(newQuestions);
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      ))}
      <button type="button" onClick={handleAddQuestion}>Add Question</button>
      <button type="submit">Create Quiz</button>
      <ToastContainer />
    </form>
  );
};

export default QuizForm;
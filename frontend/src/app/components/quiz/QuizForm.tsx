import React, { useState } from 'react';
import { quizService } from '@/services/quiz.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', choices: ['', ''] }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', choices: ['', ''] }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await quizService.createQuiz({ title, questions });
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
        </div>
      ))}
      <button type="button" onClick={handleAddQuestion}>Add Question</button>
      <button type="submit">Create Quiz</button>
      <ToastContainer />
    </form>
  );
};

export default QuizForm;
// ในไฟล์ quiz/take/[id]/page.tsx
import QuestionCard from '@/app/components/quiz/QuestionCard';

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
  return <QuestionCard {...question} />;
}
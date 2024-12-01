// app/components/shared/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
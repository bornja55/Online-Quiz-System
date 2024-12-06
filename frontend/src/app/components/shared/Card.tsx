// app/components/shared/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string; // เพิ่ม className ที่นี่
}

export const Card = ({ title, children, className = '' }: CardProps) => { // เพิ่ม className ในพารามิเตอร์
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}> {/* ใช้ className */}
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        {children}
    </div>
  );
};

export default Card;
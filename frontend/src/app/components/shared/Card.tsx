// components/shared/Card.tsx
  interface CardProps {
    title: string;
    children: React.ReactNode;
  }
  
  const Card = ({ title, children }: CardProps) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
      </div>
    );
  };
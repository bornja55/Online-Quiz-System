// components/shared/Button.tsx
  interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
  }
  
  const Button = ({ children, onClick, variant = 'primary', type = 'button' }: ButtonProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded-md ${
          variant === 'primary' 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        {children}
      </button>
    );
  };

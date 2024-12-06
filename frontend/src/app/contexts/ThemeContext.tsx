import React, { createContext, useContext, useState, ReactNode } from 'react';

// สร้าง Context สำหรับ Theme
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);

// สร้าง Provider สำหรับ Theme
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light'); // ค่าเริ่มต้นเป็น 'light'

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook สำหรับใช้ ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
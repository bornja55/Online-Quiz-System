import React from 'react';  

type ErrorBoundaryProps = {  
  children: React.ReactNode;  
};  

type ErrorBoundaryState = {  
  hasError: boolean;  
};  

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {  
  constructor(props: ErrorBoundaryProps) {  
    super(props);  
    this.state = { hasError: false };  
  }  

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {  
    // อัพเดต state เพื่อแสดง fallback UI  
    return { hasError: true };  
  }  

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {  
    // คุณสามารถ log ข้อผิดพลาดไปยัง service เช่น Sentry หรือ LogRocket  
    console.error('Error caught by ErrorBoundary:', error, errorInfo);  
  }  

  render() {  
    if (this.state.hasError) {  
      // UI ที่จะแสดงเมื่อเกิดข้อผิดพลาด  
      return (  
        <div style={{ textAlign: 'center', marginTop: '50px' }}>  
          <h1>Something went wrong.</h1>  
          <p>We apologize for the inconvenience. Please try again later.</p>  
        </div>  
      );  
    }  

    return this.props.children;  
  }  
}  

export default ErrorBoundary;  
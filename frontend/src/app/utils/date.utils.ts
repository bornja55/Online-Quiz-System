// src/app/utils/date.utils.ts
export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  export const getCurrentDate = (): string => {
    return new Date().toISOString().split('T')[0]; // คืนค่าวันที่ในรูปแบบ YYYY-MM-DD
  };
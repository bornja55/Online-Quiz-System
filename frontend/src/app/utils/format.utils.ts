// src/app/utils/format.utils.ts
export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('th-TH').format(num);
  };
  
  export const formatCurrency = (amount: number): string => {
    return `${formatNumber(amount)} บาท`; // แสดงจำนวนเงินในรูปแบบสกุลเงินบาท
  };
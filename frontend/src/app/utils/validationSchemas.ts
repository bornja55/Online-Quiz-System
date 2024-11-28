import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
email: Yup.string()
  .email('อีเมลไม่ถูกต้อง')
  .required('กรุณากรอกอีเมล'),
password: Yup.string()
  .min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
  .required('กรุณากรอกรหัสผ่าน'),
});

export const registerSchema = Yup.object().shape({
email: Yup.string()
  .email('อีเมลไม่ถูกต้อง')
  .required('กรุณากรอกอีเมล'),
password: Yup.string()
  .min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
  .required('กรุณากรอกรหัสผ่าน'),
confirmPassword: Yup.string()
  .oneOf([Yup.ref('password')], 'รหัสผ่านไม่ตรงกัน')
  .required('กรุณายืนยันรหัสผ่าน')
});
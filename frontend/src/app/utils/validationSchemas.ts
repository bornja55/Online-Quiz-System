import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('รูปแบบอีเมลไม่ถูกต้อง')
    .required('กรุณากรอกอีเมล'),
  password: Yup.string()
    .min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
    .required('กรุณากรอกรหัสผ่าน')
});

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('รูปแบบอีเมลไม่ถูกต้อง')
    .required('กรุณากรอกอีเมล'),
  password: Yup.string()
    .min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
    .required('กรุณากรอกรหัสผ่าน'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'รหัสผ่านไม่ตรงกัน')
    .required('กรุณายืนยันรหัสผ่าน'),
  firstName: Yup.string().required('กรุณากรอกชื่อ'),
  lastName: Yup.string().required('กรุณากรอกนามสกุล'),
  role: Yup.string().required('กรุณาเลือกบทบาท')
});
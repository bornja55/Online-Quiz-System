// src/app/page/auth/login/page.tsx
"use client";
import { loginValidationSchema } from '@/utils/validationSchemas';
import { useState } from 'react';
import { useFormik } from 'formik';
import { 
Box, 
TextField, 
Button, 
Typography, 
Container,
CircularProgress 
} from '@mui/material';


export default function Login() {
const [isSubmitting, setIsSubmitting] = useState(false);

const formik = useFormik({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema: loginValidationSchema,
  onSubmit: async (values) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login attempt:', values);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }
});

return (
  <Container maxWidth="sm">
    <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5">
        เข้าสู่ระบบ
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="อีเมล"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          disabled={isSubmitting}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="รหัสผ่าน"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'เข้าสู่ระบบ'
          )}
        </Button>
      </Box>
    </Box>
  </Container>
);
}

// src/app/auth/register/page.tsx
"use client";

import { useState } from 'react';
import { useFormik } from 'formik';
import { registerValidationSchema } from '@/app/utils/validationSchemas';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  SelectChangeEvent
} from '@mui/material';

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      role: '',
      school: '',
      grade: ''
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log('Register attempt:', values);
    },
  });

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    formik.setFieldValue('role', event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          ลงทะเบียน
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="ชื่อ"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="นามสกุล"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="อีเมล"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="รหัสผ่าน"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="ยืนยันรหัสผ่าน"
                name="confirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={formik.touched.role && Boolean(formik.errors.role)}>
                <InputLabel>บทบาท</InputLabel>
                <Select
                  name="role"
                  value={formik.values.role}
                  label="บทบาท"
                  onChange={handleRoleChange}
                >
                  <MenuItem value="student">นักเรียน</MenuItem>
                  <MenuItem value="teacher">ครู/อาจารย์</MenuItem>
                  <MenuItem value="admin">ผู้ดูแลระบบ</MenuItem>
                </Select>
                {formik.touched.role && formik.errors.role && (
                  <Typography color="error" variant="caption">
                    {formik.errors.role}
                  </Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="โรงเรียน"
                name="school"
                value={formik.values.school}
                onChange={formik.handleChange}
              />
            </Grid>
            {formik.values.role === 'student' && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="ระดับชั้น"
                  name="grade"
                  value={formik.values.grade}
                  onChange={formik.handleChange}
                />
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ลงทะเบียน
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
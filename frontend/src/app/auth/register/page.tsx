// src/app/page/auth/register/page.tsx
"use client";
import { useState } from 'react';
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
Grid
} from '@mui/material';

export default function Register() {
const [formData, setFormData] = useState({
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  role: '',
  school: '',
  grade: ''
});

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Register attempt:', formData);
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name as string]: value
  }));
};

return (
  <Container maxWidth="sm">
    <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5">
        ลงทะเบียน
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="ชื่อ"
              name="firstName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="นามสกุล"
              name="lastName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="อีเมล"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="รหัสผ่าน"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="ยืนยันรหัสผ่าน"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>บทบาท</InputLabel>
              <Select
                name="role"
                value={formData.role}
                label="บทบาท"
                onChange={handleChange}
              >
                <MenuItem value="student">นักเรียน</MenuItem>
                <MenuItem value="teacher">ครู/อาจารย์</MenuItem>
                <MenuItem value="admin">ผู้ดูแลระบบ</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="โรงเรียน"
              name="school"
              onChange={handleChange}
            />
          </Grid>
          {formData.role === 'student' && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="ระดับชั้น"
                name="grade"
                onChange={handleChange}
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

// src/app/profile/password/page.tsx
import React, { useState } from 'react';

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // เพิ่มฟังก์ชันการเปลี่ยนรหัสผ่านที่นี่
  };

  return (
    <div>
      <h1>เปลี่ยนรหัสผ่าน</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword">รหัสผ่านปัจจุบัน:</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">รหัสผ่านใหม่:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">ยืนยันรหัสผ่านใหม่:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">เปลี่ยนรหัสผ่าน</button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
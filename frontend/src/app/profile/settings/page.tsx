// src/app/profile/settings/page.tsx
import React from 'react';

const ProfileSettingsPage = () => {
  return (
    <div>
      <h1>การตั้งค่าโปรไฟล์</h1>
      <form>
        <div>
          <label htmlFor="username">ชื่อผู้ใช้:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">อีเมล:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">บันทึกการตั้งค่า</button>
      </form>
    </div>
  );
};

export default ProfileSettingsPage;
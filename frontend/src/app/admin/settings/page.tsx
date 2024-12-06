// src/app/admin/settings/page.tsx
import React from 'react';

const AdminSettingsPage = () => {
  return (
    <div>
      <h1>การตั้งค่าระบบ</h1>
      <form>
        <div>
          <label htmlFor="siteTitle">ชื่อเว็บไซต์:</label>
          <input type="text" id="siteTitle" name="siteTitle" required />
        </div>
        <div>
          <label htmlFor="language">ภาษา:</label>
          <select id="language" name="language">
            <option value="th">ไทย</option>
            <option value="en">อังกฤษ</option>
          </select>
        </div>
        <button type="submit">บันทึกการตั้งค่า</button>
      </form>
    </div>
  );
};

export default AdminSettingsPage;
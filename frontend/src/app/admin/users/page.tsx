// src/app/admin/users/page.tsx
import React from 'react';

const AdminUsersPage = () => {
  return (
    <div>
      <h1>จัดการผู้ใช้</h1>
      <table>
        <thead>
          <tr>
            <th>ชื่อผู้ใช้</th>
            <th>อีเมล</th>
            <th>บทบาท</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {/* แสดงข้อมูลผู้ใช้ที่นี่ */}
          <tr>
            <td>ตัวอย่างผู้ใช้</td>
            <td>example@example.com</td>
            <td>Admin</td>
            <td>
              <button>แก้ไข</button>
              <button>ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsersPage;
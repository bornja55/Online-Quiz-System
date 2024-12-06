// src/app/profile/password/page.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { Card } from '@/app/components/shared/Card';
import Button from '@/app/components/shared/Button';

interface UserData {
  name: string;
  email: string;
  role: string;
  avatar: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({
    name: 'ผู้ใช้ตัวอย่าง',
    email: 'user@example.com',
    role: 'นักเรียน',
    avatar: 'https://placehold.co/200x200'
  });

  const [formData, setFormData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    setIsEditing(false);
  };

  const handlePasswordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement password change logic
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">โปรไฟล์ของฉัน</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card title="ข้อมูลส่วนตัว">
          <div className="flex flex-col items-center mb-6">
            <Image
              src={user.avatar}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mb-4"
            />
            {!isEditing ? (
              <div className="text-center">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.role}</p>
                <Button onClick={handleEditToggle} variant="secondary" className="mt-4">
                  แก้ไขโปรไฟล์
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">ชื่อ</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">อีเมล</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="secondary" onClick={handleEditToggle}>
                    ยกเลิก
                  </Button>
                  <Button type="submit">บันทึก</Button>
                </div>
              </form>
            )}
          </div>
        </Card>

        <Card title="เปลี่ยนรหัสผ่าน">
          <form onSubmit={handlePasswordSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">รหัสผ่านปัจจุบัน</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">รหัสผ่านใหม่</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">ยืนยันรหัสผ่านใหม่</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">เปลี่ยนรหัสผ่าน</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
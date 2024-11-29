// app/dashboard/page.tsx
'use client';  // ต้องใส่เพื่อใช้ React hooks

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface User {
  name: string;
  role: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User>({ name: 'Test User', role: 'student' });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">ยินดีต้อนรับ, {user.name}</h1>
        <p className="text-gray-600">สถานะ: {user.role}</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <QuickActionCard
          title="แบบทดสอบที่พร้อมสอบ"
          count={5}
          link="/quiz/available"
          bgColor="bg-blue-500"
        />
        <QuickActionCard
          title="ผลการสอบล่าสุด"
          count={3}
          link="/quiz/results"
          bgColor="bg-green-500"
        />
        <QuickActionCard
          title="การแจ้งเตือน"
          count={2}
          link="/notifications"
          bgColor="bg-yellow-500"
        />
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">กิจกรรมล่าสุด</h2>
        <div className="space-y-4">
          <ActivityItem
            title="ทำแบบทดสอบ Mathematics 101"
            date="2024-02-20"
            status="completed"
          />
          <ActivityItem
            title="เริ่มแบบทดสอบ Physics Basic"
            date="2024-02-19"
            status="in-progress"
          />
          <ActivityItem
            title="ลงทะเบียนคอร์ส Chemistry"
            date="2024-02-18"
            status="registered"
          />
        </div>
      </div>
    </div>
  );
}

// Component สำหรับ Quick Action Card
interface QuickActionCardProps {
  title: string;
  count: number;
  link: string;
  bgColor: string;
}

function QuickActionCard({ title, count, link, bgColor }: QuickActionCardProps) {
  return (
    <Link href={link}>
      <div className={`${bgColor} text-white rounded-lg p-6 hover:opacity-90 transition-opacity`}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold">{count}</p>
      </div>
    </Link>
  );
}

// Component สำหรับ Activity Item
interface ActivityItemProps {
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'registered';
}

function ActivityItem({ title, date, status }: ActivityItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'in-progress':
        return 'text-yellow-600';
      case 'registered':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="flex justify-between items-center border-b pb-4">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <span className={`${getStatusColor(status)} text-sm font-medium`}>
        {status === 'completed' && 'เสร็จสิ้น'}
        {status === 'in-progress' && 'กำลังดำเนินการ'}
        {status === 'registered' && 'ลงทะเบียนแล้ว'}
      </span>
    </div>
  );
}
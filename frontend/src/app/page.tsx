'use client';

//import Image from "next/image";
import Link from "next/link";
import { Card } from "@/app/components/shared/Card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          ระบบทดสอบออนไลน์
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          ระบบทดสอบออนไลน์ที่ใช้งานง่าย รวดเร็ว และมีประสิทธิภาพ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card title="สำหรับผู้เรียน">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            เข้าสู่ระบบเพื่อทำแบบทดสอบและดูผลคะแนน
          </p>
          <Link 
            href="/auth/login"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            เข้าสู่ระบบ
          </Link>
        </Card>

        <Card title="สำหรับผู้สอน">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            จัดการแบบทดสอบและดูผลการสอบของผู้เรียน
          </p>
          <Link 
            href="/auth/login"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            เข้าสู่ระบบ
          </Link>
        </Card>

        <Card title="สำหรับผู้ดูแลระบบ">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            จัดการระบบและผู้ใช้งานทั้งหมด
          </p>
          <Link 
            href="/auth/login"
            className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            เข้าสู่ระบบ
          </Link>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">ยังไม่มีบัญชี?</h2>
        <Link 
          href="/auth/register"
          className="inline-block px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          สมัครสมาชิก
        </Link>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">คุณสมบัติเด่น</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4">
            <h4 className="font-bold mb-2">ใช้งานง่าย</h4>
            <p className="text-gray-600 dark:text-gray-300">ออกแบบให้ใช้งานได้ง่าย ไม่ซับซ้อน</p>
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2">รวดเร็ว</h4>
            <p className="text-gray-600 dark:text-gray-300">ประมวลผลรวดเร็ว แสดงผลทันที</p>
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2">ปลอดภัย</h4>
            <p className="text-gray-600 dark:text-gray-300">รักษาความปลอดภัยข้อมูลตามมาตรฐาน</p>
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2">วิเคราะห์ผล</h4>
            <p className="text-gray-600 dark:text-gray-300">รายงานผลการสอบแบบละเอียด</p>
          </div>
        </div>
      </div>
    </div>
  );
}
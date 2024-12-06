// src/app/quiz/edit/[id]/page.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

const EditQuizPage = () => {
  const router = useRouter();
  const { id } = router.query; // รับ ID ของแบบทดสอบจาก URL
  const [quizData, setQuizData] = useState({
    title: '',
    questions: [],
  });

  useEffect(() => {
    // ฟังก์ชันเพื่อดึงข้อมูลแบบทดสอบจาก API
    const fetchQuizData = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/quizzes/${id}`);
          const data = await response.json();
          setQuizData(data);
        } catch (error) {
          toast.error('ไม่สามารถดึงข้อมูลแบบทดสอบได้');
        }
      }
    };

    fetchQuizData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuizData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/quizzes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });

      if (response.ok) {
        toast.success('แก้ไขแบบทดสอบสำเร็จ');
        router.push('/quiz'); // เปลี่ยนเส้นทางไปยังหน้ารายการแบบทดสอบ
      } else {
        toast.error('ไม่สามารถแก้ไขแบบทดสอบได้');
      }
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการแก้ไขแบบทดสอบ');
    }
  };

  return (
    <div>
      <h1>แก้ไขแบบทดสอบ</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">ชื่อแบบทดสอบ:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={quizData.title}
            onChange={handleChange}
            required
          />
        </div>
        {/* เพิ่มฟิลด์สำหรับคำถามที่นี่ */}
        <button type="submit">บันทึกการเปลี่ยนแปลง</button>
      </form>
    </div>
  );
};

export default EditQuizPage;
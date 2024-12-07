//src/app/_not-found/page.tsx
import Link from 'next/link'

export default function NotFound() {  
  return (  
    <div className="min-h-screen flex items-center justify-center bg-gray-50">  
      <div className="text-center">  
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>  
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">  
          ไม่พบหน้าที่คุณต้องการ  
        </h2>  
        <p className="text-gray-500 mb-8">  
          หน้าที่คุณกำลังค้นหาอาจถูกย้ายหรือลบออกไปแล้ว  
        </p>  
        <Link  
          href="/"  
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"  
        >  
          กลับหน้าหลัก  
        </Link>  
      </div>  
    </div>  
  );  
}  
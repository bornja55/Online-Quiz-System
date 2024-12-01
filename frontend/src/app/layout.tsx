import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// แก้ไขเป็น relative path แทน
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

// Font configuration
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap', // เพิ่ม display swap เพื่อการแสดงผลที่ดีขึ้น
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Online Quiz System",
  description: "ระบบทดสอบออนไลน์ที่ยืดหยุ่นและใช้งานง่าย สำหรับการศึกษาและการฝึกอบรม",
  keywords: [
    "quiz",
    "online test",
    "education",
    "e-learning",
    "การสอบออนไลน์",
    "แบบทดสอบ",
    "การศึกษา"
  ],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // เพิ่ม icon สำหรับ iOS
  },
  openGraph: {  // เพิ่ม OpenGraph metadata
    type: 'website',
    locale: 'th_TH',
    url: 'https://your-domain.com',
    title: 'Online Quiz System',
    description: 'ระบบทดสอบออนไลน์ที่ยืดหยุ่นและใช้งานง่าย',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Quiz System',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          flex 
          flex-col 
          bg-gray-50
          text-gray-900
          dark:bg-gray-900 
          dark:text-gray-100
          transition-colors
          duration-200
        `}
      >
        {/* Error Boundary ควรเพิ่มในอนาคต */}
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <Footer />

        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }} 
        />
      </body>
    </html>
  );
}
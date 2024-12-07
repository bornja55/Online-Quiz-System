// app/layout.tsx

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css"; // นำเข้าไฟล์ CSS ทั่วไป
import Navbar from "@/app/components/shared/Navbar"; // นำเข้า Navbar
import Footer from "@/app/components/shared/Footer"; // นำเข้า Footer
import { Toaster } from "react-hot-toast"; // นำเข้า Toaster สำหรับการแจ้งเตือน
import { ThemeProvider } from "@/app/contexts/ThemeContext"; // นำเข้า ThemeProvider

// Font configuration
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

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
  authors: [{ name: "Siraphob Anuchatbut" }],
  creator: "Ball Everything",
  publisher: "English Mania",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Online Quiz System",
    description: "ระบบทดสอบออนไลน์ที่ยืดหยุ่นและใช้งานง่าย",
    url: "https://your-domain.com",
    siteName: "Online Quiz System",
    locale: "th_TH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Online Quiz System",
    description: "ระบบทดสอบออนไลน์ที่ยืดหยุ่นและใช้งานง่าย",
    creator: "@yourusername",
  },
};

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider> {/* ห่อหุ้มด้วย ThemeProvider */}
      <html lang="th" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster
            position="top-right" // ตำแหน่งของ Toaster
            toastOptions={{
              duration: 5000, // ระยะเวลาที่ toast จะแสดง
              style: {
                background: "#363636", // สีพื้นหลังของ toast
                color: "#fff", // สีตัวอักษร
              },
              success: {
                duration: 3000, // ระยะเวลาสำหรับ toast ที่สำเร็จ
                iconTheme: {
                  primary: "#4ade80", // สีไอคอนสำหรับ toast ที่สำเร็จ
                  secondary: "#fff", // สีไอคอนรอง
                },
              },
              error: {
                duration: 4000, // ระยะเวลาสำหรับ toast ที่มีข้อผิดพลาด
                iconTheme: {
                  primary: "#ef4444", // สีไอคอนสำหรับ toast ที่มีข้อผิดพลาด
                  secondary: "#fff", // สีไอคอนรอง
                },
              },
            }}
          />
        </body>
      </html>
    </ThemeProvider>
  );
}
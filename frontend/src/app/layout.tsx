// app/layout.tsx  

import type { Metadata, Viewport } from "next";  
import localFont from "next/font/local";  
import "./globals.css";  
import Navbar from "@/app/components/shared/Navbar";  
import Footer from "@/app/components/shared/Footer";  
import { Toaster } from "react-hot-toast";  
import { ThemeProvider } from "@/app/contexts/ThemeContext";  
import ErrorBoundary from "@/app/components/ErrorBoundary"; // นำเข้า ErrorBoundary  

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
    apple: "/favicon-16x16.png",
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
    <ThemeProvider>  
      <html lang="th" className={`${geistSans.variable} ${geistMono.variable}`}>  
        <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">  
          <Navbar />  
          <ErrorBoundary> {/* ใช้ ErrorBoundary ครอบส่วน children */}  
            <main className="flex-grow container mx-auto px-4 py-8">  
              {children}  
            </main>  
          </ErrorBoundary>  
          <Footer />  
          <Toaster  
            position="top-right"  
            toastOptions={{  
              duration: 5000,  
              style: {  
                background: "#363636",  
                color: "#fff",  
              },  
              success: {  
                duration: 3000,  
                iconTheme: {  
                  primary: "#4ade80",  
                  secondary: "#fff",  
                },  
              },  
              error: {  
                duration: 4000,  
                iconTheme: {  
                  primary: "#ef4444",  
                  secondary: "#fff",  
                },  
              },  
            }}  
          />  
        </body>  
      </html>  
    </ThemeProvider>  
  );  
}  
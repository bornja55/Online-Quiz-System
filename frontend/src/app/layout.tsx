import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

// คงการใช้งาน Font เดิม
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// ปรับแต่ง Metadata
export const metadata: Metadata = {
  title: "Online Quiz System",
  description: "ระบบทดสอบออนไลน์ที่ยืดหยุ่นและใช้งานง่าย",
  keywords: ["quiz", "online test", "education", "e-learning"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer Component */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
// src/app/components/shared/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold">ระบบทดสอบออนไลน์</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/dashboard">แดชบอร์ด</NavLink>
            <NavLink href="/quiz/available">แบบทดสอบ</NavLink>
            <NavLink href="/quiz/results">ผลการสอบ</NavLink>
            <NavLink href="/profile">โปรไฟล์</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <MobileNavLink href="/dashboard" onClick={() => setIsOpen(false)}>
              แดชบอร์ด
            </MobileNavLink>
            <MobileNavLink href="/quiz/available" onClick={() => setIsOpen(false)}>
              แบบทดสอบ
            </MobileNavLink>
            <MobileNavLink href="/quiz/results" onClick={() => setIsOpen(false)}>
              ผลการสอบ
            </MobileNavLink>
            <MobileNavLink href="/profile" onClick={() => setIsOpen(false)}>
              โปรไฟล์
            </MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
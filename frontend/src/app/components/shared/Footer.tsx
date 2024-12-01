// components/shared/Footer.tsx
import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Online Quiz System. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                เกี่ยวกับเรา
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                ติดต่อเรา
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                นโยบายความเป็นส่วนตัว
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
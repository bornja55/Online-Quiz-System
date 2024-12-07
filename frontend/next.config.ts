//app/next.config.ts

/** @type {import('next').NextConfig} */  
const nextConfig = {  
  reactStrictMode: true,  
  experimental: {  
    appDir: true, // เปิดใช้งาน App Router  
  },  
};  

module.exports = nextConfig;  
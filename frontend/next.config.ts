/** @type {import('next').NextConfig} */  
const nextConfig = {  
  reactStrictMode: true,  
  experimental: {  
    appDir: true,  
  },  
  output: 'standalone', // เพิ่มเพื่อช่วย debug  
};  

module.exports = nextConfig;  
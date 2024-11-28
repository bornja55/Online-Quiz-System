# 🚀 คู่มือการตั้งค่าบริการสำหรับระบบทดสอบออนไลน์

## 📋 สารบัญ
1. [บริการที่จำเป็น](#services)
2. [การตั้งค่าโฮสติ้ง](#hosting-setup)
3. [การตั้งค่าฐานข้อมูล](#database-setup) 
4. [การตั้งค่าระบบยืนยันตัวตน](#auth-setup)
5. [การตั้งค่าพื้นที่จัดเก็บไฟล์](#storage-setup)
6. [การตั้งค่าการวิเคราะห์](#analytics-setup)
7. [การตั้งค่าการตรวจสอบ](#monitoring-setup)
8. [การจัดการ Version Control](#version-control)
9. [ตัวแปรสภาพแวดล้อม](#environment-variables)
10. [การรักษาความปลอดภัย](#security)

<a name="services"></a>
## 📦 บริการที่จำเป็น

### 1. โฮสติ้งและโดเมน
- **Frontend**: Vercel (https://vercel.com)
  - ฟรีสำหรับ Personal Projects
  - รองรับ Node.js
  - SSL ฟรี
  - เชื่อมต่อกับ GitHub

- **Backend**: Railway (https://railway.app)
  - ฟรีสำหรับ Personal Projects
  - รองรับ Python
  - Database hosting

### 2. ฐานข้อมูล
- **MongoDB Atlas** (https://www.mongodb.com/cloud/atlas)
  - Free Tier: 512MB
  - Shared Clusters
  - Automatic Backups
  - Basic Analytics

### 3. ระบบยืนยันตัวตน
- **Auth0** (https://auth0.com)
  - ฟรี 7,000 Active users
  - Social Login
  - JWT Support
  - Basic Rules

### 4. พื้นที่จัดเก็บไฟล์
- **Cloudinary** (https://cloudinary.com)
  - ฟรี 25GB/เดือน
  - รองรับรูปภาพและวิดีโอ
  - Image Optimization

### 5. ระบบวิเคราะห์
- **Google Analytics** (https://analytics.google.com)
  - ฟรีไม่จำกัด
  - รายงานละเอียด
  - Real-time tracking

### 6. ระบบตรวจสอบ
- **UptimeRobot** (https://uptimerobot.com)
  - ตรวจสอบ Website uptime
  - แจ้งเตือนเมื่อระบบล่ม
  - ฟรี 50 monitors

### 7. Version Control
- **GitHub** (https://github.com)
  - ฟรีสำหรับ Public/Private Repositories
  - GitHub Actions สำหรับ CI/CD
  - Project Management Tools

<a name="hosting-setup"></a>
## ⚙️ การตั้งค่าโฮสติ้ง

### Frontend (Vercel)
1. สมัครบัญชี Vercel
2. เชื่อมต่อกับ GitHub Repository
3. Import project
4. ตั้งค่า Environment Variables:
```env
NEXT_PUBLIC_API_URL=your_backend_url
NEXT_PUBLIC_AUTH0_DOMAIN=your_auth0_domain
NEXT_PUBLIC_AUTH0_CLIENT_ID=your_auth0_client_id
```
5. Deploy

### Backend (Railway)
1. สมัครบัญชี Railway
2. สร้าง Project ใหม่
3. เลือก Python Template
4. ตั้งค่า Environment Variables:
```env
MONGODB_URI=your_mongodb_uri
AUTH0_DOMAIN=your_auth0_domain
AUTH0_API_IDENTIFIER=your_auth0_api_identifier
```
5. Deploy

<a name="database-setup"></a>
## 💾 การตั้งค่าฐานข้อมูล

### MongoDB Atlas
1. สมัครบัญชี MongoDB Atlas
2. สร้าง Cluster (Free Tier):
   - เลือก Cloud Provider & Region
   - เลือก Cluster Tier (M0 Sandbox)
3. Network Access:
   - Add IP Address: 0.0.0.0/0 (Allow from anywhere)
4. Database Access:
   - สร้าง Database User
   - บันทึก Username และ Password
5. Connect to Cluster:
   - รับ Connection String
   - แทนที่ <password> ด้วย password จริง

<a name="auth-setup"></a>
## 🔐 การตั้งค่าระบบยืนยันตัวตน

### Auth0
1. สมัครบัญชี Auth0
2. สร้าง Application:
   - Name: Quiz System
   - Type: Single Page Application
3. ตั้งค่า Allowed Callbacks:
```
http://localhost:3000/callback
https://your-domain.com/callback
```
4. ตั้งค่า Rules:
   - User Roles
   - Email Verification
5. บันทึก Credentials:
   - Domain
   - Client ID
   - Client Secret

<a name="storage-setup"></a>
## 📁 การตั้งค่าพื้นที่จัดเก็บไฟล์

### Cloudinary
1. สมัครบัญชี Cloudinary
2. ตั้งค่า Upload Presets:
   - Unsigned uploading
   - Image transformations
3. บันทึก Credentials:
   - Cloud Name
   - API Key
   - API Secret
4. ตั้งค่า Security:
   - Upload restrictions
   - Access control

<a name="analytics-setup"></a>
## 📊 การตั้งค่าการวิเคราะห์

### Google Analytics
1. สร้าง Google Analytics Account
2. ตั้งค่า Data Stream:
   - Web
   - App
3. ติดตั้ง Tracking Code:
```html
<!-- Global site tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
```
4. ตั้งค่า Goals และ Events

<a name="monitoring-setup"></a>
## 🔍 การตั้งค่าการตรวจสอบ

### UptimeRobot
1. สมัครบัญชี UptimeRobot
2. เพิ่ม Monitors:
   - Frontend URL
   - Backend URL
   - API Endpoints
3. ตั้งค่าการแจ้งเตือน:
   - Email
   - Slack
   - Discord

<a name="version-control"></a>
## 🔄 การจัดการ Version Control

### GitHub
1. สร้าง Repository:
   - Initialize with README
   - Add .gitignore
2. โครงสร้าง Repository:
```
project-root/
├── frontend/
├── backend/
├── docs/
├── database/
└── .github/
```
3. Branch Strategy:
```
main
├── develop
├── feature/*
└── hotfix/*
```
4. GitHub Actions:
```yaml
name: CI/CD
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Tests
        run: npm test
```

<a name="environment-variables"></a>
## 🔧 ตัวแปรสภาพแวดล้อม

### Frontend (.env)
```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_AUTH0_DOMAIN=
NEXT_PUBLIC_AUTH0_CLIENT_ID=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Backend (.env)
```env
MONGODB_URI=
AUTH0_DOMAIN=
AUTH0_API_IDENTIFIER=
CLOUDINARY_URL=
```

<a name="security"></a>
## 🔒 การรักษาความปลอดภัย

### แนวทางปฏิบัติ
1. เปิดใช้ 2FA ทุกบริการ
2. ใช้ Password Manager
3. ตรวจสอบ Security Alerts
4. อัพเดท Dependencies
5. Backup ข้อมูลสม่ำเสมอ

### การตรวจสอบความปลอดภัย
1. Code scanning
2. Dependency scanning
3. Secret scanning
4. Security headers
5. SSL/TLS configuration

## 📝 หมายเหตุ
- บันทึก Credentials ทั้งหมดในที่ปลอดภัย
- ตรวจสอบ Usage Limits ของแต่ละบริการ
- ติดตาม Service Status อย่างสม่ำเสมอ
- อัพเดทเอกสารเมื่อมีการเปลี่ยนแปลง
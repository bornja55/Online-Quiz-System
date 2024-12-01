function App() {
  const [profile, setProfile] = React.useState({
    name: 'ผู้ใช้ทดสอบ',
    email: 'test@example.com',
    role: 'นักเรียน',
    joinDate: '2024-01-01',
    avatar: 'https://placehold.co/100x100',
    bio: 'นักเรียนชั้นมัธยมศึกษาปีที่ 6'
  });

  const [isEditing, setIsEditing] = React.useState(false);
  const [isChangingPassword, setIsChangingPassword] = React.useState(false);
  const [passwordForm, setPasswordForm] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    setIsEditing(false);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // TODO: Implement password change logic
    setIsChangingPassword(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">โปรไฟล์</h1>

      <div className="max-w-2xl space-y-6">
        {/* ข้อมูลส่วนตัว */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">ข้อมูลส่วนตัว</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 hover:text-blue-700"
            >
              {isEditing ? 'ยกเลิก' : 'แก้ไข'}
            </button>
          </div>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            {/* รูปโปรไฟล์ */}
            <div className="flex items-center space-x-4">
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              {isEditing && (
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  เปลี่ยนรูป
                </button>
              )}
            </div>

            {/* ชื่อ */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ชื่อ-นามสกุล
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-900">{profile.name}</p>
              )}
            </div>

            {/* อีเมล */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                อีเมล
              </label>
              <p className="mt-1 text-gray-900">{profile.email}</p>
            </div>

            {/* บทบาท */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                บทบาท
              </label>
              <p className="mt-1 text-gray-900">{profile.role}</p>
            </div>

            {/* ประวัติ */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ประวัติ
              </label>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-900">{profile.bio}</p>
              )}
            </div>

            {isEditing && (
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  บันทึก
                </button>
              </div>
            )}
          </form>
        </div>

        {/* เปลี่ยนรหัสผ่าน */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">เปลี่ยนรหัสผ่าน</h2>
            <button
              onClick={() => setIsChangingPassword(!isChangingPassword)}
              className="text-blue-600 hover:text-blue-700"
            >
              {isChangingPassword ? 'ยกเลิก' : 'เปลี่ยนรหัสผ่าน'}
            </button>
          </div>

          {isChangingPassword && (
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  รหัสผ่านปัจจุบัน
                </label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      currentPassword: e.target.value,
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  รหัสผ่านใหม่
                </label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      newPassword: e.target.value,
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ยืนยันรหัสผ่านใหม่
                </label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  บันทึกรหัสผ่าน
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
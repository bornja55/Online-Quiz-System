// app/hooks/useUser.ts
import { useState, useEffect } from 'react';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export const useUser = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const response = await fetch('/api/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        const userData = await response.json();
        setProfile(userData);
      } else {
        throw new Error('Failed to fetch profile');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error loading profile');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const updatedData = await response.json();
        setProfile(updatedData);
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    error,
    fetchProfile,
    updateProfile
  };
};
'use client';

import { useState } from 'react';
import { signup, login } from '../Service/authService';
import { setToken, removeToken } from '../utils/jwtHelper';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (userData) => {
    try {
      const { jwt } = await signup(userData);
      setToken(jwt);
      Cookies.set('jwtToken', jwt);  // Set token in cookies
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  const handleLogin = async (userData) => {
    try {
      const response = await login(userData);
      if (response.jwt) {
        setToken(response.jwt);
        Cookies.set('jwtToken', response.jwt);  // Also set token in cookies
        return response;
      } else {
        setError('No token returned from server');
        return null;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      return null;
    }
  };

  const handleLogout = () => {
    removeToken();
    Cookies.remove('jwtToken'); // Remove token from cookies
    router.push('/auth/login');
  };

  return {
    handleSignup,
    handleLogin,
    handleLogout,
    error,
  };
};

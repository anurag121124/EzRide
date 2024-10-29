// src/pages/dashboard.js
'use client';

import { useEffect, useState } from 'react';
import { getToken, removeToken } from '../../utils/jwtHelper';
import { useRouter } from 'next/navigation';
import * as jwt_decode from 'jwt-decode';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      console.log ("Token missing")
      return;
    }
    try {
      const decoded = jwt_decode(token);
      setUser(decoded);
      console.error("Token is decoded ", error);

    } catch (error) {
      console.error("Token decoding failed", error);
      console.log("TokenDecodeError")
      removeToken();
    }
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button className=' bg-red-600 p-5'
        onClick={() => {
          removeToken();
          router.push('/auth/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

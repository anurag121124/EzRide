// src/services/authService.js
import axios from 'axios';
import { API_BASE_URL } from '../config/apiConfig';

export const signup = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/user/signup`, userData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log("Signup Response:", response.data); // Debugging response
  return response.data; // Expects `{ jwt: <token>, ... }`
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/user/signin`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log("Login Response:", response.data); // Debugging response
    
   
    
    return response.data; // Return the response for any further processing
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
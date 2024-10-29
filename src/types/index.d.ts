// src/types/index.d.ts
export interface UserData {
    fullName: string;
    email: string;
    password: string;
    mobile: string;
  }
  
  export interface AuthResponse {
    token: string;
    message: string;
    error: boolean;
  }
  
"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/shared/api/axios";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  name?: string;
  email?: string;
  created_at?: string;
  id?: string;
  updated_at?: string;
  email_verified_at?: string;
};

type Errors = {
  name?: string[];
  email?: string[];
  password?: string[];
};

type LoginParams = {
  email: string;
  password: string;
};

type RegisterParams = {
  name: string;
  email: string;
  password: string;
};

type NewPasswordParams = {
  email: string | number;
  token: string | undefined;
  password: string;
};

export interface AuthContextValues {
  csrf: () => Promise<void>;
  errors: Errors;
  user: User | null;
  login: (data: LoginParams) => Promise<void>;
  register: (data: RegisterParams) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  sessionVerified: boolean;
  status: string | null;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
  sendPasswordResetLink: (data: { email: string }) => Promise<void>;
  newPassword: (data: NewPasswordParams) => Promise<void>;
  sendEmailVerificationLink: () => Promise<void>;
}

const defaultContextValue: AuthContextValues = {
  csrf: async () => {},
  errors: {},
  user: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  loading: false,
  sessionVerified: false,
  status: null,
  setStatus: () => {},
  sendPasswordResetLink: async () => {},
  newPassword: async () => {},
  sendEmailVerificationLink: async () => {},
};

export const AuthContext =
  createContext<AuthContextValues>(defaultContextValue);

const SESSION_NAME = "session-verified";

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<string | null>(null);
  const [sessionVerified, setSessionVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const sessionData = localStorage.getItem(SESSION_NAME);
    setSessionVerified(sessionData ? JSON.parse(sessionData) : false);
  }, []);

  const csrf = async () => {
    console.log(sessionVerified);
    try {
      await axiosInstance.get("/sanctum/csrf-cookie");
    } catch (error) {
      console.error("CSRF token fetch failed:", error);
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axiosInstance.get("/api/user");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setUser(data);
      setSessionVerified(true);
      localStorage.setItem(SESSION_NAME, "true");
    } catch (e) {
      console.warn("Error fetching user:", e);
      setSessionVerified(false);
      localStorage.removeItem(SESSION_NAME);
      setUser(null);
    }
  };

  const login = async (data: LoginParams) => {
    setErrors({});
    setLoading(true);
    try {
      await csrf();
      const response = await axiosInstance.post("/login", data);
      await getUser();
      return response;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterParams) => {
    setErrors({});
    setLoading(true);
    try {
      await csrf();
      const response = await axiosInstance.post("/register", data);
      await getUser();
      return response;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.post("/logout");
      setUser(null);
      setSessionVerified(false);
      localStorage.removeItem(SESSION_NAME);
    } catch (e) {
      console.error("Logout error:", e);
      throw e;
    }
  };

  const sendPasswordResetLink = async (data: { email: string }) => {
    setErrors({});
    setLoading(true);
    setStatus(null);
    try {
      await csrf();
      const response = await axiosInstance.post("/forgot-password", data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setStatus(response.data?.status);
      return response;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const newPassword = async (data: NewPasswordParams) => {
    setErrors({});
    setLoading(true);
    setStatus(null);
    try {
      await csrf();
      const response = await axiosInstance.post("/reset-password", data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setStatus(response.data?.status);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
      return response;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const sendEmailVerificationLink = async () => {
    setErrors({});
    setLoading(true);
    setStatus(null);
    try {
      await csrf();
      const response = await axiosInstance.post(
        "/email/verification-notification",
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setStatus(response.data?.status);
      return response;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser().finally(() => setLoading(false));
    }
  }, [user]);

  const contextValue: AuthContextValues = {
    csrf,
    errors,
    user,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    login,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    register,
    logout,
    loading,
    status,
    sessionVerified,
    setStatus,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    sendPasswordResetLink,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    newPassword,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    sendEmailVerificationLink,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

"use client";

import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axiosInstance, { updateAxiosToken } from "@/shared/api/axios";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { AxiosError } from "axios";
import Cookies from "js-cookie";

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
  email: string;
  token: string | undefined;
  password: string;
  password_confirmation: string;
};

export interface AuthContextValues {
  errors: Errors;
  user: User | null;
  login: (data: LoginParams) => Promise<{ token: string }>;
  register: (data: RegisterParams) => Promise<{ token: string }>;
  logout: () => Promise<void>;
  loading: boolean;
  sessionVerified: boolean;
  status: string | null;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
  sendPasswordResetLink: (data: {
    email: string;
  }) => Promise<{ status: string }>;
  newPassword: (data: NewPasswordParams) => Promise<{ status: string }>;
  sendEmailVerificationLink: () => Promise<{ status: string }>;
}

const defaultContextValue: AuthContextValues = {
  errors: {},
  user: null,
  login: async () => ({ token: "" }),
  register: async () => ({ token: "" }),
  logout: async () => {},
  loading: false,
  sessionVerified: false,
  status: null,
  setStatus: () => {},
  sendPasswordResetLink: async () => ({ status: "" }),
  newPassword: async () => ({ status: "" }),
  sendEmailVerificationLink: async () => ({ status: "" }),
};

export const AuthContext =
  createContext<AuthContextValues>(defaultContextValue);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [sessionVerified, setSessionVerified] = useState(false);

  useEffect(() => {
    const initializeSession = async () => {
      setLoading(true);
      const token = Cookies.get("auth-token");
      if (token) {
        await getUser();
      } else {
        setSessionVerified(false);
        setLoading(false);
      }
    };
    initializeSession();
  }, []);

  const getUser = async () => {
    const token = Cookies.get("auth-token");
    if (token) {
      try {
        const { data } = await axiosInstance.get("/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data as SetStateAction<User | null>);
        setSessionVerified(true);
      } catch (e) {
        console.warn("Error fetching user:", e);
        setSessionVerified(false);
        setUser(null);
        updateAxiosToken(null);
        Cookies.remove("auth-token");
      } finally {
        setLoading(false);
      }
    } else {
      setSessionVerified(false);
      setUser(null);
      setLoading(false);
    }
  };

  const login = async (data: LoginParams) => {
    setErrors({});
    setLoading(true);
    try {
      const response = await axiosInstance.post<{ token: string }>(
        "/api/login",
        data
      );
      const token = response.data?.token;
      if (token) {
        Cookies.set("auth-token", token, {
          expires: 7,
          secure: true,
          sameSite: "Strict",
        });
        updateAxiosToken(token);
      }
      await getUser();
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      setErrors(err.response?.data?.errors || {});
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterParams) => {
    setErrors({});
    setLoading(true);
    try {
      const response = await axiosInstance.post<{ token: string }>(
        "/api/register",
        data
      );
      const token = response.data?.token;
      if (token) {
        Cookies.set("auth-token", token, {
          expires: 7,
          secure: true,
          sameSite: "Strict",
        });
        updateAxiosToken(token);
      }
      await getUser();
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      setErrors(err.response?.data?.errors || {});
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axiosInstance.post("/api/logout");
      updateAxiosToken(null);
      Cookies.remove("auth-token");
      Cookies.remove("user");
      setUser(null);
      setSessionVerified(false);
    } catch (e) {
      console.error("Logout error:", e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const sendPasswordResetLink = async (data: { email: string }) => {
    setErrors({});
    setLoading(true);
    setStatus(null);
    try {
      const response = await axiosInstance.post<{ status: string }>(
        "/api/forgot-password",
        data
      );
      setStatus(response.data?.status);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      setErrors(err.response?.data?.errors || {});
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
      const response = await axiosInstance.post<{ status: string }>(
        "/api/reset-password",
        data
      );
      setStatus(response.data?.status);
      return response.data;
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
      const response = await axiosInstance.post<{ status: string }>(
        "/api/email/verification-notification"
      );
      setStatus(response.data?.status);
      return response.data;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const contextValue: AuthContextValues = {
    errors,
    user,
    login,
    register,
    logout,
    loading,
    status,
    sessionVerified,
    setStatus,
    sendPasswordResetLink,
    newPassword,
    sendEmailVerificationLink,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

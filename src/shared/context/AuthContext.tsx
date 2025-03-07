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
  login: (data: LoginParams) => Promise<Axios.AxiosXHR<{ token: string }>>;
  register: (
    data: RegisterParams
  ) => Promise<Axios.AxiosXHR<{ token: string }>>;
  logout: () => Promise<void>;
  loading: boolean;
  sessionVerified: boolean;
  status: string | null;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
  sendPasswordResetLink: (data: {
    email: string;
  }) => Promise<Axios.AxiosXHR<{ status: string }>>;
  newPassword: (
    data: NewPasswordParams
  ) => Promise<Axios.AxiosXHR<{ status: string }>>;
  sendEmailVerificationLink: () => Promise<Axios.AxiosXHR<{ status: string }>>;
}

const defaultContextValue: AuthContextValues = {
  errors: {},
  user: null,
  login: async () => {
    return {} as Axios.AxiosXHR<{ token: string }>;
  },
  register: async () => {
    return {} as Axios.AxiosXHR<{ token: string }>;
  },
  logout: async () => {},
  loading: false,
  sessionVerified: false,
  status: null,
  setStatus: () => {},
  sendPasswordResetLink: async () => {
    return {} as Axios.AxiosXHR<{ status: string }>;
  },
  newPassword: async () => {
    return {} as Axios.AxiosXHR<{ status: string }>;
  },
  sendEmailVerificationLink: async () => {
    return {} as Axios.AxiosXHR<{ status: string }>;
  },
};

export const AuthContext =
  createContext<AuthContextValues>(defaultContextValue);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false); // Default to false
  const [status, setStatus] = useState<string | null>(null);
  const [sessionVerified, setSessionVerified] = useState(false);

  useEffect(() => {
    const initializeSession = async () => {
      setLoading(true);
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("auth-token");
        if (token) {
          await getUser();
        } else {
          setSessionVerified(false);
          setLoading(false);
        }
      } else {
        setSessionVerified(false);
        setLoading(false);
      }
    };
    initializeSession();
  }, []);

  const getUser = async () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth-token");
      if (token) {
        try {
          const { data } = await axiosInstance.get("/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data as SetStateAction<User | null>);
          setSessionVerified(true);
        } catch (e) {
          console.warn("Error fetching user:", e);
          setSessionVerified(false);
          setUser(null);
          updateAxiosToken(null);
        } finally {
          setLoading(false);
        }
      } else {
        setSessionVerified(false);
        setUser(null);
        setLoading(false);
      }
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
        updateAxiosToken(token);
      }

      await getUser();
      return response;
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
        updateAxiosToken(token);
      }

      await getUser();
      return response;
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
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("auth-token")
          : null;
      await axiosInstance.post("/api/logout", {
        Authorization: `Bearer ${token}`,
      });
      updateAxiosToken(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
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
      return response;
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
      const response = await axiosInstance.post<{ status: string }>(
        "/api/email/verification-notification"
      );
      setStatus(response.data?.status);
      return response;
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

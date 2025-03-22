import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axiosInstance, { updateAxiosToken } from "../api/axios";
import useStore from "../store";
import { User } from "../store";

const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const {
    user,
    sessionVerified,
    authLoading,
    authErrors,
    authStatus,
    login,
    register,
    logout,
    sendPasswordResetLink,
    newPassword,
    sendEmailVerificationLink,
    setAuthStatus,
  } = useStore();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = Cookies.get("auth-token");

        if (token) {
          try {
            updateAxiosToken(token);
            const { data } = await axiosInstance.get<User>("/api/user");

            useStore.setState({
              user: data,
              sessionVerified: true,
              authLoading: false,
            });
          } catch (error) {
            console.warn("Error initializing authentication:", error);
            Cookies.remove("auth-token");
            updateAxiosToken(null);
            useStore.setState({
              user: null,
              sessionVerified: true,
              authLoading: false,
            });
          }
        } else {
          useStore.setState({
            sessionVerified: true,
            authLoading: false,
          });
        }
      } finally {
        setInitializing(false);
      }
    };

    if (typeof window !== "undefined") {
      if (!sessionVerified) {
        useStore.setState({ authLoading: true });
        initializeAuth();
      } else {
        setInitializing(false);
      }
    }
  }, [sessionVerified]);

  const isAuthenticated = () => {
    return !!user;
  };

  return {
    user,
    isAuthenticated: isAuthenticated(),
    loading: authLoading || initializing,
    errors: authErrors,
    status: authStatus,
    sessionVerified,
    login,
    register,
    logout,
    sendPasswordResetLink,
    newPassword,
    sendEmailVerificationLink,
    setAuthStatus,
  };
};

export default useAuth;

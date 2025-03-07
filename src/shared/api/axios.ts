import axios from "axios";

let token: string | null = null;

if (typeof window !== "undefined") {
  token = localStorage.getItem("auth-token");
}

const axiosInstance = axios.create({
  baseURL: "https://app.esdev.tech",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token ?? ""}`,
  },
});

export const updateAxiosToken = (newToken: string | null) => {
  if (typeof window !== "undefined") {
    if (newToken) {
      localStorage.setItem("auth-token", newToken);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newToken}`;
    } else {
      localStorage.removeItem("auth-token");
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  }
};

axiosInstance.interceptors.response.use((response) => {
  return response;
});

export default axiosInstance;

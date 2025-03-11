import axios from "axios";
import Cookies from "js-cookie";

const getToken = () => Cookies.get("auth-token");

const axiosInstance = axios.create({
  baseURL: "https://app.esdev.tech",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${getToken() || ""}`,
  },
});

export const updateAxiosToken = (newToken: string | null) => {
  if (newToken) {
    Cookies.set("auth-token", newToken, {
      expires: 7,
      secure: true,
      path: "/guides",
    });
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${newToken}`;
  } else {
    Cookies.remove("auth-token");
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

axiosInstance.interceptors.response.use((response) => response);

export default axiosInstance;

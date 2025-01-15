import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://app.esdev.fun",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use((response) => {
  return response;
});

export default axiosInstance;

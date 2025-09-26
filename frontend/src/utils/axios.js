import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const apiInstance = axios.create({
  baseURL,
  timeout: 3000,
});

export const apiInstanceToken = axios.create({
  baseURL,
  timeout: 3000,
});

apiInstanceToken.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `JWT ${token.token}`;
  }
  return config;
});

export default apiInstance;

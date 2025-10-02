import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { STORAGE_KEY } from "./const";

const baseURL = import.meta.env.VITE_API_URL;

const apiInstance = axios.create({
  baseURL,
  timeout: 10000,
});

export const apiInstanceAuth = axios.create({
  baseURL,
  timeout: 10000,
});

apiInstanceAuth.interceptors.request.use((config) => {
  const raw = secureLocalStorage.getItem(STORAGE_KEY);
  if (!raw) return config;

  let session;
  try {
    session = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch {
    session = { token: raw };
  }
  config.headers.Authorization = `JWT ${session.token}`; // atau Bearer, sesuaikan backend

  return config;
});

export default apiInstance;

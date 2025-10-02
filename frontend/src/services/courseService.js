import { apiInstanceAuth } from "../utils/axios.js";

export const getCourses = async () =>
  apiInstanceAuth.get(`/courses`).then((res) => res.data);

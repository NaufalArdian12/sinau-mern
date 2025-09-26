import { apiInstanceToken } from "../utils/axios.js";

export const getCourse = async (id) =>
  apiInstanceToken.get(`/courses/${id}`).then((res) => res.data);

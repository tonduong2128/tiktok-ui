import axios from "axios";

const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});
export const get = async (path, option = {}) => {
  const result = await request.get(path, option);
  return result.data;
};
export default request;

import axios from "axios";

export const getTodosAPI = async () => {
  const res = await axios.get(` http://localhost:3000/task`);
  return res.data;
};

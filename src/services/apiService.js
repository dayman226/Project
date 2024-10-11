import axios from "axios";

export const login = (username, password) => {
  return axios.post("/api/auth/login", { username, password });
};

export const fetchUsers = () => {
  return axios.get("/api/ad/users");
};

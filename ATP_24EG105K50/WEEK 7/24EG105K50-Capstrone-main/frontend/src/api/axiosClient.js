import axios from "axios";

const api = axios.create({
  baseURL: "https://blogapp-iyjr.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

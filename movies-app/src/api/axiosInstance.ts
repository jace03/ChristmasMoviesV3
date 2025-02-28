import axios from "axios";

const API_BASE_URL = "http://localhost/backend/christmasMoviesBackEnd/"; // Change to match your PHP API path

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

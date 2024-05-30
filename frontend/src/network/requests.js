import axios from 'axios';

export const BASE_URL = "http://localhost:8000";

export const requests = axios.create({
  baseURL: BASE_URL,
  timeout: 1000
});

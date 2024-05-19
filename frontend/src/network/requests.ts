import axios from 'axios';

export const BASE_URL = "https://localhost.com";

export const requests = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { Authorization: 'Bearer:token' },
});

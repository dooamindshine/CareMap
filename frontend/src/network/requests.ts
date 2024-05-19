import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const requests = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { Authorization: 'Bearer:token' },
});

import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
});

// Set the AUTH token for any request
http.interceptors.request.use(function (config) {
  const token = localStorage.getItem('jwt');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
export default http;

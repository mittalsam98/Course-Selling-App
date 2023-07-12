import axios from 'axios';
import { isAdmin } from './utils';

const http = axios.create({
  baseURL: 'https://api-course.vercel.app',
  timeout: 1000 * 5, // Wait for 5 seconds
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
});

// Set the AUTH token for any request
http.interceptors.request.use(function (config) {
  let token;
  if (isAdmin()) {
    token = localStorage.getItem('adminJwt');
  } else {
    token = localStorage.getItem('userJwt');
  }
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.data.error.includes('Token Expired')) {
      forceLogout();
    }
    return Promise.reject(error);
  }
);

const forceLogout = () => {
  localStorage.clear();
  setTimeout(() => {
    window.location.reload();
  }, 2500);
};

export default http;

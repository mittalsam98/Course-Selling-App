import http from './http';
import { error, success } from '../toaster';

export const adminSignup = (user) => {
  return http
    .post(`api/admin/signup`, user)
    .then((response) => {
      success(response?.data?.message);
    })
    .catch((err) => {
      error(err.response?.data?.error);
    });
};

export const adminSignIn = (user) => {
  return http
    .post(`api/admin/signin`, user)
    .then((response) => {
      success(response?.data?.message);
      authenticate(response?.data?.token, () => {
        window.location.reload();
      });
    })
    .catch((err) => {
      error(err.response?.data?.error);
    });
};

export const authenticate = (data, next = () => {}) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminJwt', data);
    next();
  }
};

export const isAdminAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('adminJwt')) {
    return localStorage.getItem('adminJwt');
  } else {
    return false;
  }
};

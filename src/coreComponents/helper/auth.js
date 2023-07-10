import { error, success } from '../toaster';
import http from './http';

export const signup = (user) => {
  return http
    .post(`api/user/signup`, user)
    .then((response) => {
      success(response?.data?.message);
    })
    .catch((err) => {
      error(err.response?.data?.error);
    });
};

export const signIn = (user) => {
  return http
    .post(`api/user/signin`, user)
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
    localStorage.setItem('userJwt', data);
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('userJwt')) {
    return localStorage.getItem('userJwt');
  } else {
    return false;
  }
};


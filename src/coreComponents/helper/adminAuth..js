import http from './http';
import { error, success } from '../toaster';

export const adminSignup = (user) => {
  return http
    .post(`api/admin/signup`, user)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err.response.data;
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

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('adminJwt', data);
    next();
  }
};

export const isAdminAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (sessionStorage.getItem('adminJwt')) {
    return sessionStorage.getItem('adminJwt');
  } else {
    return false;
  }
};

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('adminJwt');
    next();

    return fetch(`api/admin/signout`, {
      method: 'GET'
    })
      .then((response) => console.log('signout success'))
      .catch((err) => console.log(err));
  }
};

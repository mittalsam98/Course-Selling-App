import { error, success } from '../toaster';
import http from './http';

export const getKey = () => {
  return http
    .get(`api/getkey`)
    .then((response) => {
      return response?.data?.key;
    })
    .catch((err) => {
      console.log(err);
      error(err?.response?.data.error || 'Something went wrong');
    });
};
export const checkout = (data) => {
  return http
    .post(`api/checkout`, data)
    .then((response) => {
      return response?.data?.order;
    })
    .catch((err) => {
      error(err?.response?.data?.error || 'Something went wrong');
    });
};
export const paymentVerification = (data) => {
  return http
    .post(`api/paymentverification`, data)
    .then((response) => {
      success(response?.data?.message);
      return response?.data?.message;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCourse = (course) => {
  return http
    .post('api/admin/course/create', course)
    .then((response) => {
      success(response?.data?.message || 'Created');
    })
    .catch((err) => {
      error(err?.response.data.error || 'Something went wrong');
    });
};

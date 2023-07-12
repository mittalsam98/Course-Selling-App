import { error, success } from '../toaster';
import http from './http';

export const getCourse = () => {
  return http
    .get(`api/user/courses`)
    .then((response) => {
      return response?.data?.courses || [];
    })
    .catch((err) => {
      throw err?.response?.data;
    });
};
export const getCourseDetails = (courseId) => {
  return http
    .get(`api/user/course/${courseId}`)
    .then((response) => {
      return response?.data?.course;
    })
    .catch((err) => {
      throw err?.response?.data?.error;
    });
};
export const getPurchasedCourse = () => {
  return http
    .get(`api/user/purchased`)
    .then((response) => {
      return response?.data?.purchases;
    })
    .catch((err) => {
      error(err?.message || 'Something went wrong');
    });
};

export const createCourse = (course) => {
  return http
    .post('api/admin/course/create', course)
    .then((response) => {
      success(response?.data?.message || 'Created');
      return response?.data?.message;
    })
    .catch((err) => {
      console.log(err);
      error(err?.message || 'Something went wrong');
      throw err
    });
};

import http from './http';

export const getCourse = () => {
  return http
    .get(`api/user/courses`)
    .then((response) => {
      return response?.data?.courses || [];
    })
    .catch((err) => {
      throw err.response.data;
    });
};
export const getCourseDetails = (courseId) => {
  return http
    .get(`api/user/course/${courseId}`)
    .then((response) => {
      return response?.data?.course;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

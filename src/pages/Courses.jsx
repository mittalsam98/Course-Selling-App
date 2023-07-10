import React, { useEffect, useState } from 'react';
import CourseCards from '../coreComponents/CourseCards';
import { getCourse } from '../coreComponents/helper/apiCalls';
import notfound from '../images/notfound.png';

function Course() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourse()
      .then((res) => {
        setCourses(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className='mt-5 px-12 text-left font-bold text-2xl'>All Courses</div>
      {courses.length > 0 ? (
        <div className='grid grid-cols-4 gap-8 py-8 px-12'>
          {courses.map((course) => {
            return <CourseCards course={course} />;
          })}
        </div>
      ) : (
        <img className='h-96 mx-auto' src={notfound} alt='Mern Stack' />
      )}
    </>
  );
}

export default Course;

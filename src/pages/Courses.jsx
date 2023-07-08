import React, { useEffect, useState } from 'react';
import CourseCards from '../coreComponents/CourseCards';
import { getCourse } from '../coreComponents/helper/apiCalls';
import { useParams } from 'react-router';

function Course() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourse()
      .then((res) => {
        setCourses(res);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(courses);
  return (
    <>
      <div className='grid grid-cols-4 gap-8 py-8 px-12'>
        {courses.length > 0 &&
          courses.map((course) => {
            return <CourseCards course={course} />;
          })}
      </div>
    </>
  );
}

export default Course;

import React, { useEffect, useState } from 'react';
import CourseCards from '../coreComponents/CourseCards';
import { getCourse } from '../coreComponents/helper/apiCalls';
import notfound from '../images/notfound.png';
import Loader from '../coreComponents/Loader';

function Course() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getCourse()
      .then((res) => {
        setCourses(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className='mt-5 px-12 text-left font-bold text-2xl'>All Courses</div>
      {loading ? (
        <Loader number={8} />
      ) : courses.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 px-12'>
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

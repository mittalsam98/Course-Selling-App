import React, { useEffect, useState } from 'react';
import CourseCards from '../coreComponents/CourseCards';
import { getPurchasedCourse } from '../coreComponents/helper/apiCalls';
import notfound from '../images/notfound.png';

function Purchases() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getPurchasedCourse()
      .then((res) => {
        setCourses(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className='mt-5 px-12 text-left font-bold text-2xl'>My Purchases</div>
      {courses && courses.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 px-12'>
          {courses.map((course) => {
            return <CourseCards course={course} purchased={true} />;
          })}
        </div>
      ) : (
        <img className='h-96 mx-auto' src={notfound} alt='Mern Stack' />
      )}
    </>
  );
}

export default Purchases;

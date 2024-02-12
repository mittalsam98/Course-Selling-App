import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdmin } from './helper/utils';

export default function CourseCards(props) {
  const navigate = useNavigate();

  var { image, name, description, price, _id } = props.course;
  if (!image) {
    image =
      'https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=';
  }
  const handleViewDetails = () => {
    if (isAdmin()) {
      navigate(`/admin/course/${_id}`);
    } else {
      navigate(`/course/${_id}`);
    }
  };
  return (
    <div
      className={`lg:max-w-sm rounded-xl shadow-lg ${
        props.purchased ? 'bg-slate-100' : 'bg-white'
      }`}
    >
      <img className='w-full rounded-xl' src={image} alt='Card' />
      <div className='px-6 py-4'>
        <div class='font-bold text-left my-2'>{name}</div>
        <div class='mb-2 text-left text-sm text-slate-500'>{description}</div>
        {!props.purchased && <div class='mb-3 text-left font-bold text-sm'>₹{price || '-'}</div>}
      </div>
      <button
        type='button'
        class='bg-blue-600 py-2 px-7 w-4/5 mr-4 mb-4 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
        onClick={handleViewDetails}
      >
        {props.purchased ? 'View' : 'View Details'}
      </button>
    </div>
  );
}

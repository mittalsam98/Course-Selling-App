import React from 'react';
import mern from '../images/mern.png';
export default function Home() {
  console.log('fdasf');
  return (
    <>
      <div className='h-96 mx-auto'>
        <img className='h-96 mx-auto' src={mern} alt='Mern Stack' />
      </div>
      <h2 className='text-3xl font-medium'>Free Videos</h2>
    </>
  );
}

import React from 'react';

export default function Input({ handleChange, id, type, title, value, placeholder }) {
  return (
    <div className='mb-4 '>
      <label htmlFor={id} className='block text-base text-gray-800 font-medium mb-1'>
        {title}
      </label>
      <input
        type={type}
        id={id}
        required={true}
        className='w-full border border-gray-300 rounded-full py-2 px-3 text-gray-800 focus:outline-none focus:ring focus:border-blue-500 transition-all bg-[#f6f7f9]'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

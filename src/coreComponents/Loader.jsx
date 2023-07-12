import React from 'react';

export default function Loader({ number = 1 }) {
  const renderLoader = () => {
    return (
      <div className={`max-w-sm rounded-xl shadow-lg px-6 w-full mx-2 py-4 bg-white`}>
        <div class=' bg-slate-200 animate-pulse h-44 w-full'></div>
        <div className='animate-pulse px-6 py-4'>
          <div class='h-8 bg-slate-200 rounded col-span-2'></div>
        </div>
        <button
          type='button'
          class='bg-blue-600 py-2 px-7 w-4/5 mr-4 mb-4 text-white rounded-3xl hover:bg-blue-600 '
          onClick={() => {}}
        >
          {'View Details'}
        </button>
      </div>
    );
    // }
  };

  return (
    <div className='flex flex-wrap items-center justify-center'>
      {Array(number)
        .fill()
        .map((_, index) => renderLoader())}
    </div>
  );
}

import React from 'react';

export default function LoggedInWarning() {
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
      <div className=' text-3xl text-slate-600 pb-4	'>
        #Warning : User Logged in and Admin Login both are not allowed at once
      </div>
      <div>
        <button
          type='submit'
          class='bg-blue-600 py-2 px-7 mx-auto text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout Now
        </button>
      </div>
    </div>
  );
}

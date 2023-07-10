import React, { useState } from 'react';
import SignUpModal from '../SignUp/SignUpModal';
import LoginModal from '../SignIn/SignInModal';
import { isAuthenticated } from '../../coreComponents/helper/auth';

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleClose = (type) => {
    if (type === 'signIn') {
      setShowLoginModal(false);
    } else if (type === 'signup') {
      setShowSignUpModal(false);
    }
  };
  const handleShow = (type) => {
    if (type === 'signIn') {
      setShowLoginModal(true);
    } else if (type === 'signup') {
      setShowSignUpModal(true);
    }
  };

  return (
    <>
      <div
        className={`flex items-center  justify-between w-full sticky top-0 ${
          isAuthenticated() ? 'bg-[#E4566E]' : 'bg-gray-50'
        } border-b py-2 px-8`}
      >
        {!isAuthenticated() ? (
          <div>
            <button
              type='button'
              class='bg-blue-600 py-2 px-7 mr-4 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              onClick={() => {
                handleShow('signup');
              }}
            >
              Sign Up
            </button>
            <button
              type='button'
              class='bg-blue-600 py-2 px-7 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              onClick={() => {
                handleShow('signIn');
              }}
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className='bg-white p-3 rounded-full'>SM</div>
        )}
      </div>
      {<LoginModal isOpen={showLoginModal} onClose={handleClose} />}
      {<SignUpModal isOpen={showSignUpModal} onClose={handleClose} />}
    </>
  );
}

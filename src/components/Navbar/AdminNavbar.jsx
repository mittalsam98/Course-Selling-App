import React, { useState } from 'react';
import SignUpModal from '../SignUp/SignUpModal';
import LoginModal from '../SignIn/SignInModal';
import { isAdminAuthenticated } from '../../coreComponents/helper/adminAuth.';

export default function NavbarAdmin() {
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
        className={`flex items-center justify-between w-full sticky top-0 ${
          isAdminAuthenticated() ? 'bg-[#40518A]' : 'bg-gray-50'
        }  border-b py-3 mt-0 px-8`}
      >
        {!isAdminAuthenticated() ? (
          <div>
            <button
              type='button'
              class='bg-blue-600 py-2 px-7 mr-4 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              onClick={() => {
                handleShow('signup');
              }}
            >
              Admin Signup
            </button>
            <button
              type='button'
              class='bg-blue-600 py-2 px-7 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              onClick={() => {
                handleShow('signIn');
              }}
            >
              Admin Login
            </button>
          </div>
        ) : (
          <div className='text-white text-2xl font-semibold '>Admin Dashboard </div>
        )}
      </div>
      {<LoginModal isOpen={showLoginModal} onClose={handleClose} />}
      {<SignUpModal isOpen={showSignUpModal} onClose={handleClose} />}
    </>
  );
}

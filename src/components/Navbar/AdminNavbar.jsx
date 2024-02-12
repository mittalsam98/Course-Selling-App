import React, { useState } from 'react';
import SignUpModal from '../SignUp/SignUpModal';
import LoginModal from '../SignIn/SignInModal';
import { isAdminAuthenticated } from '../../coreComponents/helper/adminAuth.';
import menu from '../../images/menu.png';
import AdminSideBar from '../SideBar/AdminSideBar';

export default function NavbarAdmin() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

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
  const handleNavbar = () => {
    setShowSidebar(!showSidebar);
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
              class='bg-blue-600 py-1 px-2 mr-1 lg:py-2 lg:px-7 lg:mr-4 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              onClick={() => {
                handleShow('signup');
              }}
            >
              Admin Signup
            </button>
            <button
              type='button'
              class='bg-blue-600 py-1 px-2 lg:py-2 lg:px-7 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
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

        <div className='block lg:hidden'>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={handleNavbar}
          >
            <img className='h-[30px] mx-auto' src={menu} alt='Course Selling' />
          </button>
          <div
            className={`fixed top-0 right-0 h-full z-40 w-full ${
              showSidebar ? 'translate-x-0 ' : 'translate-x-full'
            }`}
          >
            <AdminSideBar handleNavbar={handleNavbar} />
          </div>
        </div>
      </div>
      {<LoginModal isOpen={showLoginModal} onClose={handleClose} />}
      {<SignUpModal isOpen={showSignUpModal} onClose={handleClose} />}
    </>
  );
}

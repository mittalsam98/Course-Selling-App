import React, { useState } from 'react';
import { ReactComponent as Close } from '../../images/close.svg';
import { signIn } from '../../coreComponents/helper/auth';
import Input from '../../coreComponents/Input';
import { isAdmin } from '../../coreComponents/helper/utils';
import { adminSignIn } from '../../coreComponents/helper/adminAuth.';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    if (isAdmin()) {
      adminSignIn(user);
    } else {
      signIn(user);
    }
    onClose('signIn');
  };

  const handleClose = () => {
    onClose('signIn');
  };

  const handleOverlayClick = (e) => {
    onClose('signIn');
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        onClick={handleOverlayClick}
        className='absolute inset-0 bg-gray-900 opacity-50 transition-opacity'
      ></div>
      <div className='relative bg-white px-8 py-5 min-w-fit	w-3/12 h-100 rounded-2xl shadow-lg transform transition-all'>
        <h2 className='text-xl text-center font-semibold mb-12'>Login to your account</h2>
        <form onSubmit={handleSubmit}>
          <Input
            title='Email'
            handleChange={handleEmailChange}
            id='email'
            type='email'
            value={email}
            placeholder='Enter your email'
          />
          <Input
            title='Password'
            handleChange={handlePasswordChange}
            type='password'
            id='password'
            value={password}
            placeholder='Enter your Password'
          />
          <div className='flex justify-end'>
            <button
              type='submit'
              class='bg-blue-600 py-2 px-7 mx-auto text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            >
              Login
            </button>
          </div>
        </form>
        <button
          className='absolute top-5 right-4 p-1 text-white rounded-full bg-blue-700'
          onClick={handleClose}
        >
          <Close />
        </button>
        {!isAdmin() && (
          <>
            <div class='font-sm text-center w-100 text-blue-500 underline mt-3'>
              New here? Sign up by clicking here
            </div>
            <div class='text-center  text-gray-600 font-xl mt-7'>
              By signing up, you agree to our
              <a className='text-blue-500 underline' href='/#'>
                {' '}
                Terms &amp; Conditions &amp; Privacy Policy
              </a>{' '}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;

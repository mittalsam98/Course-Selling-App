import React, { useState } from 'react';
import { ReactComponent as Close } from '../../images/close.svg';
import { signin, signup } from '../../coreComponents/helper/auth';
import { error, success } from '../../coreComponents/toaster';
import Input from '../../coreComponents/Input';

const SignUpModal = ({ isOpen, onClose }) => {
  const [values, setValues] = useState({
    fName: '',
    lName: '',
    email: '',
    phoneNo: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: values.email,
      firstName: values.fName,
      lastName: values.lName,
      phoneNo: values.phoneNo,
      password: values.password
    };
    signup(user)
      .then((res) => {
        success(res?.message);
      })
      .catch((err) => {
        error(err?.error);
      });
    onClose('signup');
  };

  const handleClose = () => {
    onClose('signup');
  };

  const handleOverlayClick = (e) => {
    onClose('signup');
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        onClick={handleOverlayClick}
        className='absolute inset-0 bg-gray-900 opacity-50 transition-opacity'
      ></div>
      <div className='relative bg-white px-8 py-5 min-w-fit	w-3/12 h-100 rounded-2xl shadow-lg transform transition-all'>
        <h2 className='text-xl text-center font-semibold mb-12'>Create new account</h2>
        <form onSubmit={handleSubmit}>
          <Input
            title='First Name'
            handleChange={handleChange}
            id='fName'
            value={values.fName}
            placeholder='Enter your First Name'
          />
          <Input
            title='Last Name'
            handleChange={handleChange}
            id='lName'
            value={values.lName}
            placeholder='Enter your Last Name'
          />
          <Input
            title='Email'
            handleChange={handleChange}
            id='email'
            value={values.email}
            placeholder='Enter your email'
          />
          <Input
            title='Password'
            handleChange={handleChange}
            id='password'
            value={values.password}
            placeholder='Enter your Password'
          />
          <Input
            title='Phone Number'
            handleChange={handleChange}
            id='phoneNo'
            value={values.phoneNo}
            placeholder='Enter your number'
          />
          <div className='flex justify-end'>
            <button
              type='submit'
              class='bg-blue-600 py-2 px-7 mx-auto text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            >
              Register
            </button>
          </div>
        </form>
        <button
          className='absolute top-5 right-4 p-1 text-white rounded-full bg-blue-700'
          onClick={handleClose}
        >
          <Close />
        </button>

        <div class='text-center  text-gray-600 font-xl mt-7'>
          By signing up, you agree to our
          <a className='text-blue-500 underline' href='/#'>
            {' '}
            Terms &amp; Conditions &amp; Privacy Policy
          </a>{' '}
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;

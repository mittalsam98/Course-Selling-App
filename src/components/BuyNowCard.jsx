import React, { useState } from 'react';
import { checkout, getKey, paymentVerification } from '../coreComponents/helper/payment';
import { isAuthenticated } from '../coreComponents/helper/auth';
import LoginModal from './SignIn/SignInModal';

export default function BuyNowCard(props) {
  var image;
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { courseDetail } = props;
  const handleClose = (type) => {
    setShowLoginModal(false);
  };
  if (!image) {
    image =
      'https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=';
  }
  const checkoutHandler = async () => {
    if (!isAuthenticated()) {
      setShowLoginModal(true);
      return;
    }
    const key = await getKey();

    const order = await checkout({ price: courseDetail.price, courseId: props.courseDetail._id });

    const options = {
      key,
      amount: Number(courseDetail.price),
      currency: 'INR',
      name: 'Course Store',
      description: 'Payment for course purchase',
      image:
        'https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=',
      order_id: order?.id,
      handler: function async(response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

        const data = {
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
          course_id: props.courseDetail._id
        };
        paymentVerification(data).then((res) => {});
      },
      prefill: {},
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#E4566E'
      }
    };

    const razor = new window.Razorpay(options);

    if (order?.id) {
      razor.open();
    }
  };
  return (
    <>
      <div className='absolute right-20 top-40 max-w-sm rounded-xl shadow-lg'>
        <img className='w-full h-44 rounded-xl' src={image} alt='Card' />
        <div className='px-6 py-4'>
          <div class='mb-2 text-left text-sm text-slate-500'>Price</div>
          <div class='mb-3 text-left font-bold text-sm'>₹{courseDetail.price}</div>
          <button
            type='button'
            class='bg-blue-600 py-2 px-7 w-4/5 mr-4 mb-4 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            onClick={checkoutHandler}
          >
            Buy now
          </button>
        </div>
      </div>
      {<LoginModal isOpen={showLoginModal} onClose={handleClose} />}
    </>
  );
}

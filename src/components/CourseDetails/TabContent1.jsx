import React from 'react';
import Faq from './Faq';

export default function TabContent1(props) {
  const { courseDetail } = props;
  return (
    <>
      <div className='text-left text-2xl font-bold'>Description</div>
      <div className='text-left mb-8'>{courseDetail?.description}</div>
      <div className='text-left text-2xl font-bold mb-3'>FAQs</div>
      <Faq />
    </>
  );
}

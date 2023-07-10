import React, { useEffect, useState } from 'react';
import { getCourseDetails } from '../coreComponents/helper/apiCalls';
import { useParams } from 'react-router';
import TabContent1 from '../components/CourseDetails/TabContent1';
import TabContent2 from '../components/CourseDetails/TabContent2';
import BuyNowCard from '../components/BuyNowCard';
import { isAdmin } from '../coreComponents/helper/utils';

function CourseDetails() {
  const [courseDetail, setCourseDetail] = useState({});
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    getCourseDetails(id)
      .then((res) => {
        setCourseDetail(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className='bg-gray-700 py-12 text-4xl text-center text-white'>{courseDetail.name}</div>
      {!isAdmin() && <BuyNowCard courseDetail={courseDetail} />}
      <div class='border-b mt-6 w-2/5 mx-auto'>
        <nav class='flex'>
          <button
            class={`px-4 py-2 text-md font-normal ${
              activeTab === 1
                ? 'text-[#1266de] font-semibold border-b-4 border-[#1266de]'
                : 'text-black'
            }  hover:-blue-600  focus:outline-none active:text-gray-800 active:bg-gray-100`}
            onClick={() => changeTab(1)}
          >
            Overview
          </button>
          <button
            class={`px-4 py-2 text-md font-normal  ${
              activeTab === 2
                ? 'text-[#1266de] font-semibold border-b-4 border-[#1266de]'
                : 'text-black'
            } g-white hover:text-blue-600  focus:outline-none active:text-gray-800 active:bg-gray-100`}
            onClick={() => changeTab(2)}
          >
            Content
          </button>
        </nav>
      </div>

      <div class='mt-6 w-2/5 mx-auto'>
        <div className={`${activeTab === 1 ? '' : 'hidden'}`}>
          <TabContent1 courseDetail={courseDetail} />
        </div>
        <div className={`${activeTab === 2 ? '' : 'hidden'}`}>
          <TabContent2 courseDetail={courseDetail} />
        </div>
      </div>
    </>
  );
}

export default CourseDetails;

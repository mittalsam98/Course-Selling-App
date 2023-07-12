import React from 'react';

export default function TabContent2(props) {
  return props?.courseDetail?.modules && props?.courseDetail?.modules.length > 0 ? (
    props.courseDetail.modules.map((ele, index) => {
      return (
        <div class='cursor-pointer flex items-center border-b'>
          <div class=''>
            <img
              width='50px'
              alt='fda'
              class='rounded img-cover'
              src='https://www.shutterstock.com/image-vector/modern-video-player-design-template-260nw-762468289.jpg'
              height='50px;'
            />
          </div>
          <div class='ml-4'>
            <div class='no-gutters d-flex justify-content-between align-items-center row'>
              <div class='flex-grow-1 py-4 col'>
                <a class='text-decoration-none'>
                  Lecture{index + 1} | {ele}
                </a>
              </div>
              <div class='text-center col-md-2'></div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div>Content is empty currently :) </div>
  );
}

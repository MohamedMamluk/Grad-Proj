import React from 'react';

import FeatImage01 from '../images/features-03-image-01.png';
import FeatImage02 from '../images/features-03-image-02.png';

function FeaturesZigzag() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <div className='inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4'>
              Reach goals that matter
            </div>
            <h1 className='h2 mb-4'>One website, unlimited courses</h1>
            <p className='text-xl text-gray-400'>
              MindsOn has courses for almost everything
            </p>
          </div>

          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <img
                  className='max-w-full mx-auto md:max-w-none h-auto rounded-md'
                  src={FeatImage01}
                  width='540'
                  height='405'
                  alt='Features 01'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    For students
                  </div>
                  <h3 className='h3 mb-3'>Keep track of your progress</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    Get detailed information about all your progress in all
                    course, and the progress in the latest course that you
                    applied for.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-up'
              >
                <img
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage02}
                  width='540'
                  height='405'
                  alt='Features 02'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    For Instructors
                  </div>
                  <h3 className='h3 mb-3'>Track your earnings and views</h3>
                  <p className='text-xl text-gray-400 mb-4'>
                    Knowing how your content is performing is important to us as
                    it is important to you, get detailed information with graphs
                    about how your content is doing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;

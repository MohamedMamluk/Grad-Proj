import React, { useEffect, useMemo } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatImage01 from '../images/features-03-image-01.png';
import FeatImage02 from '../images/features-03-image-02.png';
import { useTranslation } from 'react-i18next';
function FeaturesZigzag() {

  let [t,i18n] = useTranslation();

  const blockVariants = useMemo(() => ({
    show: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, transition: { duration: 1 } },
  }));
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);
  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  }));


  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <motion.div
          ref={ref}
          animate={controls}
          variants={container}
          initial='hidden'
          className='py-12 md:py-20 border-t border-gray-800'
        >
          {/* Section header */}
          <motion.div
            variants={blockVariants}
            className='max-w-3xl mx-auto text-center pb-12 md:pb-16'
          >
            <div className='inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4'>
              
              {t("Reach goals that matter")}
            </div>

            {/* <h1 className='h2 mb-4'>{t("One website, unlimited courses")}</h1> */}

            <h1 className='h2 mb-4 text-black'>
              {t("One website, unlimited courses")}
            </h1>

            <p className='text-xl text-gray-400'>
             
              {t("Our Website has courses for almost everything")}
            </p>
          </motion.div>

          {/* Items */}
          <motion.div
            ref={ref}
            animate={controls}
            variants={container}
            initial='hidden'
            className='grid gap-20'
          >
            {/* 1st item */}
            <motion.div
              variants={blockVariants}
              className='md:grid md:grid-cols-12 md:gap-6 items-center'
            >
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
                   
                    {t("For students")}
                  </div>

                  {/* <h3 className='h3 mb-3'></h3> */}

                  <h3 className='h3 mb-3 text-black'>
                  {t("Keep track of your progress")}
                  </h3>

                  <p className='text-xl text-gray-400 mb-4'>
                    {t("Get detailed information about all your progress in all course and the progress in the latest course that you applied for")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2nd item */}
            <motion.div
              variants={blockVariants}
              className='md:grid md:grid-cols-12 md:gap-6 items-center'
            >
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
                    {t("For Instructors")}
                  </div>

                  {/* <h3 className='h3 mb-3'></h3> */}

                  <h3 className='h3 mb-3 text-black'>
                  {t("Track your earnings and views")}
                  </h3>

                  <p className='text-xl text-gray-400 mb-4'>
                    {t("Knowing how your content is performing is important to us as it is important to you, get detailed information with graphs about how your content is doing")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;

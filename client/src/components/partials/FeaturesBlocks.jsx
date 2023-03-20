
import React from 'react';
import { useTranslation } from 'react-i18next';
import  { useEffect, useMemo } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function FeaturesBlocks() {
  let [t,i18n] = useTranslation();



function FeaturesBlocks() {
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
        staggerChildren: 0.2,
      },
    },
  }));

  return (
    <section>
      <div className ='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}

          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2 mb-4'>{t("Why Our Website ?")}</h2>

          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20 text-black'>
            <h2 className='h2 mb-4'>Why pick MindsOn?</h2>

          </div>

          {/* Items */}
          <motion.div
            ref={ref}
            animate={controls}
            variants={container}
            initial='hidden'
            // animate='show'
            className='max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none'
            data-aos-id-blocks
          >
            {/* 1st item */}
            <motion.div
              variants={blockVariants}
              className='relative flex flex-col items-center'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
            >
              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  className='fill-current text-purple-600'
                  width='64'
                  height='64'
                  rx='32'
                />
                <path
                  className='stroke-current text-purple-100'
                  d='M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924'
                  strokeLinecap='square'
                  strokeWidth='2'
                  fill='none'
                  fillRule='evenodd'
                />
                <path
                  className='stroke-current text-purple-300'
                  d='M43 42h-9M43 37h-9'
                  strokeLinecap='square'
                  strokeWidth='2'
                />
              </svg>

              <h4 className='h4 mb-2'>{t("Educational Standards")}</h4>

              <h4 className='h4 mb-2 text-black'>Educational Standards</h4>

              <p className='text-lg text-gray-400 text-center'>
                {t("Our Website has the latest educational standards, easily accessible and interesting")}
              </p>
            </motion.div>

            {/* 2nd item */}
            <motion.div
              variants={blockVariants}
              className='relative flex flex-col items-center'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-anchor='[data-aos-id-blocks]'
            >
              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  className='fill-current text-purple-600'
                  cx='32'
                  cy='32'
                  r='32'
                />
                <path
                  className='stroke-current text-purple-100'
                  strokeWidth='2'
                  strokeLinecap='square'
                  d='M21 23h22v18H21z'
                  fill='none'
                  fillRule='evenodd'
                />
                <path
                  className='stroke-current text-purple-300'
                  d='M26 28h12M26 32h12M26 36h5'
                  strokeWidth='2'
                  strokeLinecap='square'
                />
              </svg>

              {/* <h4 className='h4 mb-2'></h4> */}

              <h4 className='h4 mb-2 text-black'>{t("Study System")}</h4>

              <p className='text-lg text-gray-400 text-center'>
               {t("Our System is so flexible. You can Take the Course at any time of the year also there is no limitation for a specific time to finish it")}
              </p>
            </motion.div>

            {/* 3rd item */}
            <motion.div
              variants={blockVariants}
              className='relative flex flex-col items-center'
              data-aos='fade-up'
              data-aos-delay='400'
              data-aos-anchor='[data-aos-id-blocks]'
            >
              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  className='fill-current text-purple-600'
                  width='64'
                  height='64'
                  rx='32'
                />
                <g
                  strokeLinecap='square'
                  strokeWidth='2'
                  fill='none'
                  fillRule='evenodd'
                >
                  <path
                    className='stroke-current text-purple-100'
                    d='M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6'
                  />
                  <path
                    className='stroke-current text-purple-300'
                    d='M22 30h4v12h-4z'
                  />
                </g>
              </svg>

              {/* <h4 className='h4 mb-2'></h4> */}

              <h4 className='h4 mb-2 text-black'>{t("Classes & Scheduling")}</h4>

              <p className='text-lg text-gray-400 text-center'>
                {t("You can choose the optimal time for yourself, morning or evening. It doesn't matter")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </div>

    </section>
  );
}
}
export default FeaturesBlocks;

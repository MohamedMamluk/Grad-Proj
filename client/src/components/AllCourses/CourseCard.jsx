import { ListItemButton, ListItemText } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
function CourseCard({ course }) {
  let [t, i18n] = useTranslation();
  const { name, description, cost, image } = course;
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const blockVariants = useMemo(() => ({
    show: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, transition: { duration: 1 } },
  }));


  return (
    <motion.div
      variants={blockVariants}
      className='bg-white rounded-lg h-auto shadow-md shadow-purple-300 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-300'
    >
      <img src={image} alt={name} className='w-full h-48 object-cover' />
      <div className='p-4 h-max'>
        <h2 className='text-lg font-semibold' title={name}>
          {name.length > 35 ? name.substring(0, 35) + '...' : name}
        </h2>
        <p className='text-gray-600 mt-2'>{description}</p>
        <div className='mt-4 flex flex-wrap items-center justify-between '>
          <span className='font-bold text-gray-700'>
            {cost == 'free' ? t('Free') : USD.format(cost)}
          </span>
          {/* <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-auto rounded-md'>
            See More
          </button> */}
          <Link
            to={`/dashboard/courses/${course._id}`}
            style={{ textDecoration: 'none' }}
            variant='body2'
            className='bg-blue-500 hover:bg-blue-600 text-white  w-auto rounded-md'
          >
            <ListItemButton style={{ width: 'max-content' }}>
              <ListItemText primary= {t('See More')} />
            </ListItemButton>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default CourseCard;

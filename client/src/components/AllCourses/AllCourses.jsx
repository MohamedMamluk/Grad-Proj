import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import './allCourses.css';
import Button from '@mui/material/Button';
import { ListItemButton, ListItemText } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../loading/loading';
import CourseCard from './CourseCard';
import Pagination from './Pagination';
import { useAnimation, motion } from 'framer-motion';

const AllCourses = () => {
  const [courses, setCourse] = useState(null);
  const userData = useSelector((store) => store.auth.userData);
  const [coursesInPage, setCoursesInPage] = useState([]);
  const [page, setPage] = useState(1);

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
    setCoursesInPage(courses.slice(6 * (pageNumber - 1), 6 * pageNumber));
  };
  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }));

  useEffect(() => {
    axios.get('/course').then((res) => {
      setCourse(res.data);
      setCoursesInPage(res.data.slice(0, 6));
    });
  }, []);
  if (!courses) {
    return (
      <div style={{ position: 'absolute', left: '10%', top: '70%' }}>
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold mb-8'>Available Courses</h1>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {coursesInPage.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </motion.div>
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(courses.length / 6)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default AllCourses;

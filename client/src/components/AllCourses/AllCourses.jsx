import React from 'react';
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

const AllCourses = () => {
  const [courses, setCourse] = useState(null);
  const userData = useSelector((store) => store.auth.userData);
  const [coursesInPage, setCoursesInPage] = useState([]);
  const [page, setPage] = useState(1);

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
    setCoursesInPage(courses.slice(6 * (pageNumber - 1), 6 * pageNumber));
  };

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
    // <div id='coursesContainer' className='container'>
    //   {courses.map((course) => {
    //     return (
    //       <div key={course._id} className='card p-3 m-2 '>
    //         <div id='card-image__container'>
    //           <img src={course.image} id='card-image' alt='...' />
    //         </div>
    //         <div className='card-body'>
    //           <p className='card-text' title={course.name}>
    //             {course.name.length > 50
    //               ? course.name.substring(0, 45) + '...'
    //               : course.name}
    //           </p>
    //           <p className='card-text'>{course.cost}</p>
    //           <p className='card-text'>{course?.duration}</p>
    //           <Link to={`/dashboard/courses/${course._id}`} variant='body2'>
    //             <ListItemButton style={{ width: 'max-content' }}>
    //               <ListItemText primary='See More' />
    //             </ListItemButton>
    //           </Link>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className='bg-gray-100'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold mb-8'>Available Courses</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {coursesInPage.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
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

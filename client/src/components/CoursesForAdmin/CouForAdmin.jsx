import { Button, ListItemButton, ListItemText } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../loading/loading';
import './CouForAdmin.css';
import { useTranslation } from 'react-i18next';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CouForAdmin = () => {
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  let [t, i18n] = useTranslation();
  const [flag, setflag] = useState('ALL');
  const user = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [filteredCoursesflag, setFilteredCoursesflag] = useState(
    courses.Courses
  );
  function filtered(e) {
    setflag(e.target.value);
    switch (e.target.value) {
      case 'Free':
        const Newcourses = courses.filter((course) => course.cost === 'free');
        setFilteredCoursesflag(Newcourses);
        break;
      case '>300':
        const NewcoursesLess = courses.filter((course) => +course.cost < 300);
        setFilteredCoursesflag(NewcoursesLess);
        break;
      case '<=300':
        const NewcoursesGre_Eq = courses.filter(
          (course) => +course.cost >= 300
        );
        setFilteredCoursesflag(NewcoursesGre_Eq);
        break;
      default:
        setFilteredCoursesflag(courses);
    }
  }
  useEffect(() => {
    axios.get('/course').then((res) => {
      if (user.role == 'instructor') {
        const coursesByInstructor = res.data.filter(
          (course) => course.instructor === user.id
        );
        setCourses(coursesByInstructor);
        setFilteredCoursesflag(coursesByInstructor);
      } else {
        setCourses(res.data);
        setFilteredCoursesflag(res.data);
      }
    });
  }, [courses]);
  const deletCourse = (event,id)=>{
    axios.delete('/course/'+id).then(()=>{
      // console.log("deleted insha2 allahh.");
      toast('Deleted Successfuly')
    }).catch((err)=>{
      // console.log('m4 deleted , sorry -_-');
      toast.error('Error -_-');
    });
  }
  if (!courses.length > 0) {
    return (
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <Loader />
      </Container>
    );
  }
  return (
    <div>
      <div className='filterContainer mb-5' id='btnDiv'>
        <label for='Cost'> {t("Filter")}</label>
        <select name='Cost' value={flag} id='Categories' onChange={filtered}>
          <option value='ALL'>{t("All Courses")}</option>
          <option value='Free'>{t("Free")}</option>
          <option value='>300'>{t("Less Than 300")}</option>
          <option value='<=300'>{t("Greater than or equal 300")}</option>
        </select>
      </div>

      <div className='bg-gray-100 container'>
        {filteredCoursesflag.length == 0 && (
          <h1 className='text-center'>{t("No courses found")}</h1>
        )}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredCoursesflag.map((course) => (
            <div className='bg-white rounded-lg h-auto shadow-md shadow-purple-300 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-300'>
              <img
                src={course.image}
                alt={course.name}
                className='w-full h-48 object-cover'
              />

              <div className='p-4 h-max'>
                <h2 className='text-lg font-semibold' title={course.name}>
                  {course.name.length > 35
                    ? course.name.substring(0, 35) + '...'
                    : course.name}
                </h2>
                <div className='mt-4 flex flex-wrap gap-2 items-center justify-between '>
                  <Link
                  onClick={()=>{}}
                    to={`/dashboard/courses/${course._id}`}
                    style={{ textDecoration: 'none' }}
                    variant='body2'
                    className='bg-blue-500 hover:bg-blue-600 text-white flex-1 w-auto rounded-md'
                  >
                    <ListItemButton style={{ textAlign: 'center' }}>
                      <ListItemText primary={t('View')} />
                    </ListItemButton>
                  </Link>
                  <Link
                    to={`/dashboard/courses-created/update/${course._id}`}
                    style={{ textDecoration: 'none' }}
                    variant='body2'
                    className='bg-green-500 hover:bg-green-600 text-white flex-1  w-auto rounded-md'
                  >
                    <ListItemButton style={{ textAlign: 'center' }}>
                      <ListItemText primary={t('Update')} />
                    </ListItemButton>
                  </Link>
                  <Link
                  onClick={(e)=>{
                    deletCourse(e,course._id)
                  }}
                    style={{ textDecoration: 'none' }}
                    variant='body2'
                    className='bg-red-500 hover:bg-red-600 text-white flex-1  w-auto rounded-md'
                  >
                    <ListItemButton style={{ textAlign: 'center' }}>
                      <ListItemText primary={t('Delete')} />
                    </ListItemButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouForAdmin;

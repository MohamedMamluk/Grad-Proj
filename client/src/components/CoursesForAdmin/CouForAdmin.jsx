import { Button } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../loading/loading';
import './CouForAdmin.css';
const CouForAdmin = () => {
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
  }, []);
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
      <div className='filterContainer' id='btnDiv'>
        <label for='Cost'> Filter:</label>
        <select name='Cost' value={flag} id='Categories' onChange={filtered}>
          <option value='ALL'>All Courses </option>
          <option value='Free'>Free</option>
          <option value='>300'>Less Than 300 </option>
          <option value='<=300'>Greater than or equal 300</option>
        </select>
      </div>

      <div className=' '>
        <div className='row d-flex justify-content-center'>
          {filteredCoursesflag.map((course) => (
            <div key={course._id} className='card p-3 m-2 col-md-5 col-xl-3'>
              <img
                src={course.image}
                className='card-img-top w-full h-48 object-cover'
                alt='...'
              />
              <div className='card-body'>
                <p className='card-text'>
                  {course.name.length > 35
                    ? course.name.substring(0, 35) + '...'
                    : course.name}
                </p>
                <p className='card-text'>{course.cost}</p>
                <p className='card-text'>{course.Duration}</p>
                <Button
                  type='button'
                  variant='contained'
                  sx={{
                    backgroundColor: 'green',
                    '&:hover': {
                      backgroundColor: 'green',
                    },
                  }}
                  className='w-100  my-2'
                  onClick={() => navigate(`/dashboard/courses/${course._id}`)}
                >
                  See More
                </Button>
                <Button
                  type='button'
                  variant='contained'
                  sx={{
                    backgroundColor: 'orange',
                    '&:hover': {
                      backgroundColor: 'orange',
                    },
                  }}
                  className='w-100  my-2'
                  onClick={() =>
                    navigate(`/dashboard/courses-created/update/${course._id}`)
                  }
                >
                  Update
                </Button>
                <Button
                  type='button'
                  variant='contained'
                  sx={{
                    backgroundColor: 'red',
                    '&:hover': {
                      backgroundColor: 'red',
                    },
                  }}
                  className='my-2 w-100'
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouForAdmin;

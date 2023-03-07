import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import coursesData from '../../udemy_courses.json';
import './allCourses.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
const AllCourses = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    axios.get('/course').then((res) => {
      setCourse(res.data);
      // //console.log(res.data);
    });
  }, []);

  return (
    <div id='coursesContainer' className='container'>
      {courses.map((course) => (
        <div key={course._id} className='card p-3 m-2 '>
          <div id='card-image__container'>
            <img src={course.image} id='card-image' alt='...' />
          </div>
          <div className='card-body'>
            <p className='card-text' title={course.name}>
              {course.name.length > 50
                ? course.name.substring(0, 45) + '...'
                : course.name}
            </p>
            <p className='card-text'>{course.cost}</p>
            <p className='card-text'>{course.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;

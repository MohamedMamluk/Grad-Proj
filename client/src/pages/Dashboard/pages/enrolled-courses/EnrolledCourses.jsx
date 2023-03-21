import React from 'react';
import '../../../../components/AllCourses/allCourses.css';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import './EnrolledCourses.css';
import { connect, useSelector } from 'react-redux';
import CourseCard from '../../../../components/AllCourses/CourseCard';

const mapStateToProps = (state) => {
  return {
    data: state.auth.userData,
  };
};
const EnrolledCourses = ({ data }) => {
  const [courses, setCourses] = useState([]);
  const user = useSelector((store) => store.auth);
  useEffect(() => {
    const getCourses = async () => {
      await axios.all(
        user.userData.courses.map(async (course) => {
          console.log(course);
          const courseData = await axios.get(`/course/${course}`);
          console.log(courseData.data);
          setCourses((prev) => [...prev, courseData.data]);
        })
      );
    };
    getCourses();
  }, []);

  return (
    <div>
      <h3>Enrolled Courses</h3>
      <ul>
        <div id='coursesContainer' className='container gap-3'>
          {courses?.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(EnrolledCourses);

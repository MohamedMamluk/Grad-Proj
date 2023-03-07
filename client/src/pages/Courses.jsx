import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/header/header';
import AllCourses from '../components/AllCourses/AllCourses';
import CouHeader from '../components/CoursesHeader/CouHeader';
// import courses from '../udemy_courses.json';
const Courses = () => {
  return (
    <div>
      <Header></Header>
      <CouHeader />
      <AllCourses />
    </div>
  );
};

export default Courses;

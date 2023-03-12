import React from 'react';
import Header from '../components/header/header';
import AllCourses from '../components/AllCourses/AllCourses';
import CouHeader from '../components/CoursesHeader/CouHeader';

const Courses = () => {
  return (
    <div>
      <Header></Header>
      {/* <CouHeader /> */}
      <AllCourses />
    </div>
  );
};

export default Courses;

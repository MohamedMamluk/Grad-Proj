import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/header/header';
import AllCourses from '../components/AllCourses/AllCourses';
import CouHeader from '../components/CoursesHeader/CouHeader';
// import courses from '../udemy_courses.json';
const Courses = () => {
  // const [data, setData] = useState(courses);
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:7000/api/courseinfo')
  //     .then((res) => setData(res.data));
  // }, []);
  // if (data.length == 0) {
  //   return <p>loading</p>;
  // }
  return (
    <div>
      <Header></Header>
      <CouHeader />
      <AllCourses />
    </div>
  );
};

export default Courses;

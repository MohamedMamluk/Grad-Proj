import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
const Courses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:7000/api/courseinfo')
      .then((res) => setData(res.data));
  }, []);
  if (data.length == 0) {
    return <p>loading</p>;
  }
  return (
    <div>
      <Header />
      {data.map((course) => (
        <p key={course._id}>{course.categories[0].name}</p>
      ))}
    </div>
  );
};

export default Courses;

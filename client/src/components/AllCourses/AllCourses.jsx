import React from 'react';
import { useEffect, useState } from 'react';
import './allCourses.css';
import Button from "@mui/material/Button";
import {
  ListItemButton,
  ListItemText,
} from '@mui/material';
import axios from "axios";
import { Link } from "react-router-dom";

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
            <Button variant="text">Enroll</Button>
            <Link to={`/dashboard/courses/${course._id}`} variant="body2">
              <ListItemButton style={{ width: "max-content" }}>
                <ListItemText primary="See More" />
              </ListItemButton>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;

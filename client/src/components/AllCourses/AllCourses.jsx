import React from 'react';
import { useEffect, useState } from 'react';
import {useLocation,useParams} from 'react-router-dom';
import axios from 'axios';
const AllCourses = () => {
    const [courses, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:7000/api/course')
      .then((res) => {setCourse(res.data)
       console.log(res.data)
    
    });
  }, []);
 
    return (
<div className=' p-3 m-2'>
<div className='row d-flex flex-row mx-auto justify-content-center' >
    {courses.map((course)=>
        
        <div key={course._id} className="card p-3 m-2  col-3" >
        <img src={course.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{course.name}</p>
          <p className="card-text">{course.cost}</p>
          <p className="card-text">{course.duration}</p>
          
        </div>
      </div>
      
    )}
    </div>
</div>

    );
}

export default AllCourses;

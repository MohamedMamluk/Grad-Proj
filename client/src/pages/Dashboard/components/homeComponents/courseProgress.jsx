//rsc

import React from 'react';
// import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Box, Container} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
const CourseProgress = (props) => {
    const [progress, setProgress] = React.useState(10);
    const [courses, setCourse] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000/api/course/64021d904252c621581e6ea0').then((res) => {
      setCourse(res.data);
      console.log(res.data);
    });
  }, []);
  
    return (
        <Container
      className='hello-section'
      sx={{
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        width: '40%' 
      }}
    >
        <Box className='left-box' sx={{ width: '100%' }}>
            <div style={{display:"flex" , alignItems:"start", gap:"10px"}}>
        <div>
            <img src={courses.image} id='card-image' alt='Course Picture' style={{ width: '100px', height:"100px", borderRadius:"20px" }} />
          </div>
          <div >
        <h6 className='home-welcome' style={{ fontSize: '14px', margin:"0px" }}>
          Course: {courses.name}
        </h6>
        <label style={{margin:"0px" }}>
            started: 18/4/2022
        </label>
        <div style={{display:"flex"}}>
            <div style={{width:"25px",height:"25px",borderRadius:"50%", backgroundColor:"white",margin:"2px"}}></div>
            <div style={{width:"25px",height:"25px",borderRadius:"50%", backgroundColor:"white",margin:"2px"}}></div>
        </div>
          </div>
            </div>
        <Box sx={{ width: '98%' }}>
            <span style={{ fontSize: '80%' }}>
                Completed homework assignments
            </span>
          <LinearProgressWithLabel value={progress} />
        </Box>
        <Box sx={{ width: '98%' }}>
            <span style={{ fontSize: '80%' }}>
                Completed the course
            </span>
          <LinearProgressWithLabel value={progress} />
        </Box>
        </Box>
        </Container>
      );
};

export default CourseProgress;
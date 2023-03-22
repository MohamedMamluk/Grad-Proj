import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const CourseProgress = (props) => {
  let [t, i18n] = useTranslation();
  const user = useSelector((store) => {
    return store.auth;
  });
  let UserCourse = user.userData.courses;
  let lastElement = UserCourse.slice(-1)[0];
  // console.log('lastelement ', lastElement);
  const [courseProgress, setCourseProgress] = useState(0);
  const [courses, setCourse] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const lessonsCompletedTrue = (data) => {
    let lessonaya = 0;
    const redusedData = data.reduce((pre, current) => {
      current.lessons.map((lesson) => {
        lessonaya++;
        if (lesson.isFinished) {
          return pre++;
        }
      });
      return pre;
    }, 0);
    return { redusedData, lessonaya };
  };

  useEffect(() => {
    axios.get(`/course/${lastElement}`).then((courseRes) => {
      setCourse(courseRes.data);
      console.log('courses ', courseRes.data);
      axios.get(`/lessonsFinished/std/${user.userData._id}`).then((res) => {
        const courseFilter = res.data.find(
          (obj) => obj.courseInfoId == courseRes.data.courseInfo
        );
        const completed = lessonsCompletedTrue([courseFilter]);
        setCourseProgress((completed.redusedData / completed.lessonaya) * 100);
      });
      axios.get(`/instructor/${courseRes.data.instructor}`).then((res) => {
        // console.log('inside instructor: ', res.data);
        setInstructor(res.data);
      });
    });
  }, [courses]);

  return (
    <Container
      className='hello-section hello-section-progress'
      sx={{
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
      }}
    >
      <Box className='left-box' sx={{ width: '100%' }}>
        <div
          id='course-progress-imga_text'
          style={{ alignItems: 'start', gap: '10px' }}
        >
          <div>
            <img
              src={courses.image}
              id='card-image'
              alt='Course Picture'
              style={{ width: '100px', height: '100px', borderRadius: '20px' }}
            />
          </div>
          <br>
          </br>
          <div>
            <h6
              className='home-welcome'
              style={{ fontSize: '14px', margin: '0px' ,marginTop:"2px"}}
            >
              {t("Course")}: {courses.name}
            </h6>
            <br>
            </br>
            {/* <label style={{ margin: '0px' }}>{t("started")}: 18/4/2022</label> */}
            <div style={{ display: 'flex' }}>
              <img
                src={instructor.user?.image}
                style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  margin: '2px',
                }}
              />
              <label
                style={{ margin: '5px', fontSize: '13px' }}
              >{t("Instructor")}:  {instructor.user?.firstName} {instructor.user?.lastName}</label>
              {/* <div
                style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  margin: '2px',
                }}
              ></div> */}
            </div>
          </div>
        </div>
        {/* <Box sx={{ width: '98%' }}>
          <span style={{ fontSize: '80%' }}>
            Completed homework assignments
          </span>
          <LinearProgressWithLabel value={progress} />
        </Box> */}
        <Box sx={{ width: '98%' }}>
          <span style={{ fontSize: '80%' }}>
            {t("Course duration")} : {t(`${courses.duration}`)}
            
            {/* {`Course duration: ${courses.duration}`} */}
          </span>
        </Box>
        <Box sx={{ width: '98%' }}>
          <span style={{ fontSize: '80%' }}>{t("Progress On Final Course That you Enrolled in")}</span>
          <LinearProgressWithLabel value={courseProgress} />
        </Box>
      </Box>
    </Container>
  );
};

export default CourseProgress;

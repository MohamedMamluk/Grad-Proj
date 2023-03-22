import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Video from '../../../../components/lessonTypes/Video';
import Certificate from '../../../../components/lessonTypes/certificate/Certificate.jsx';
import LessonNav from '../../../../components/lessonNav/lessonNav';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Test from '../../../../components/lessonTypes/Test';

const Lesson = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const userData = useSelector((store) => store.auth);
  const [course, setCourse] = useState({});
  const [lesson, setLesson] = useState({});
  let [t, i18n] = useTranslation();
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    const getLesson = async () => {
      const data = await axios.get('/lesson/' + pathnames[4]);
      setLesson(data.data);
    };
    const getCourse = async () => {
      const courseData = await axios.get('/course/' + pathnames[2]);
      setCourse(courseData.data);
      axios.get('/courseinfo/' + courseData.data.courseInfo).then((res) => {
        console.log(res.data.courseLessons);
        setLessons(res.data.courseLessons);
      });
    };
    const updateLessonsFinished = async () => {
      const lessonFinished = await axios.patch(
        '/lessonsFinished/' + pathnames[4],
        {
          studentId: userData.id,
        }
      );
    };
    updateLessonsFinished();
    getLesson();

    getCourse();
  }, [pathnames[4]]);

  if (!lesson) {
    return <h1>loading...</h1>;
  }
  let index = lessons.findIndex((obj) => {
    return obj.lessonId == pathnames[4];
  });
  console.log(index);

  // let prevBool = false;
  // let nextBool = false;

  const prev = () => {
    if (index != 0) {
      console.log(lessons[index - 1].lessonId);
      navigate(
        `/dashboard/courses/${course._id}/lesson/${lessons[index - 1].lessonId}`
      );
    }
  };

  const overview = () => {
    navigate(`/dashboard/courses/${course._id}/lesson/`);
  };

  const next = () => {
    if (index != lessons.length) {
      console.log(lessons[index + 1].lessonId);
      navigate(
        `/dashboard/courses/${course._id}/lesson/${lessons[index + 1].lessonId}`
      );
    }
  };
  return (
    <>
    <Box sx={{
        display: 'flex',
        width:'maxContent',
        justifyContent:'center',
        alignItems: 'center',
        '& > *': {
          m: 2,
        },
        '& button': { p: 2 },
      }}>
      {lesson.type == 'Video' && <Video videoLink={lesson.link}/>}   
      {lesson.type == 'Test' && <Test testLink={lesson.link}/>}      
    </Box>

      <Box
        sx={{
          display: 'flex',
          width: 'maxContent',
          justifyContent: 'center',
          alignItems: 'center',
          '& > *': {
            m: 2,
          },
          '& button': { p: 2 },
        }}
      >
        {lesson.type == 'Video' && <Video videoLink={lesson.link} />}
        {lesson.type == 'Test' && <Test testLink={lesson.link} />}
        {lesson.type == 'Resources' && (
          <div>
            <h1>{lesson.title}</h1>
            <h2>{lesson.link}</h2>
            <p>{lesson.description}</p>
          </div>
        )}
        {lesson.type == 'Certificate' && (
          <Certificate
            courseName={course.name}
            studentName={userData.userData.firstName}
          />
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& > *': {
            m: 2,
          },
          '& button': { p: 2 },
        }}
      >
        <Button variant='outlined' onClick={prev}>
          Previous Lesson
        </Button>
        <Button variant='outlined' onClick={overview}>
          Course Overview
        </Button>
        <Button variant='outlined' onClick={next}>
          Next Lesson
        </Button>
      </Box>
    </>
  );
};

export default Lesson;

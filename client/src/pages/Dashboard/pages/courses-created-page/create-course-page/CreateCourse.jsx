import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import AddingLessonForm from '../../../../../components/AddingNewCourseForm/addingLesson';
import AddingNewCourseForm from '../../../../../components/AddingNewCourseForm/addingNewCourse';
import AddingCourseInfoForm from '../../../../../components/AddingNewCourseForm/addingCourseInfo';
import FullSizeButton from '../../../../../components/buttons/FullSizeButton';
import axios from 'axios';
import { Box, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

const lessonDataObject = { type: '', title: '', link: '', description: '' };
const CreateCourse = () => {
  let [t, i18n] = useTranslation();
  const auth = useSelector((state) => state.auth);
  const [courseInfoData, setcourseInfoData] = useState({
    categories: [{ name: 'name' }],
    description: '',
    level: '',
    whatYouWillLearn: [{ title: '', description: '' }],
  });
  const [newCourse, setNewCourse] = useState({
    courseTitle: '',
    courseDuration: '',
    paid: '',
    isPaied: '0',
    img: '', //to be handeled
  });
  const [disableButton , setDisableButton] = useState(false)
  const [lessonData, setLessonData] = useState([lessonDataObject]);
  const navigate = useNavigate();
  const insertNewLesson = useCallback(() => {
    setLessonData((prev) => [...prev, lessonDataObject]);
  }, []);
  const updateLesson = (index) => (e) => {
    const updatedState = [...lessonData];
    updatedState.splice(index, 1, {
      ...updatedState[index],
      [e.target.name]: e.target.value,
    });
    setLessonData((prev) => updatedState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableButton(true);
    let courseLessonsIds = [];
    axios
      .all(
        lessonData.map((lesson) =>
          axios
            .post('/lesson', lesson)
            .then((response) =>
              courseLessonsIds.push({ lessonId: response.data._id })
            )
        )
      )
      .then(() => {
        const newCourseInfo = {
          ...courseInfoData,
          courseLessons: courseLessonsIds,
          instructorId: auth.id,
        };
        axios.post('/courseinfo', newCourseInfo).then((res) => {
          const newCourseData = {
            name: newCourse.courseTitle,
            cost: newCourse.isPaied,
            is_paid: newCourse.paid == 'free' ? false : true,
            duration: newCourse.courseDuration,
            image: newCourse.img,
            courseInfo: res.data._id,
            instructor: auth.id,
          };
          axios.post('/course', newCourseData);
        });
      }).then(()=>{
        toast('Created Successfully');
        setDisableButton(false);

        navigate('/dashboard/courses');

      }).catch((err)=>{
        toast.error('Creation Failed!');
        setDisableButton(false);
      });
  };

  return (
    <div>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <AddingNewCourseForm {...newCourse} setNewCourse={setNewCourse} />
        <AddingCourseInfoForm
          {...courseInfoData}
          updateCourseInfo={setcourseInfoData}
        />

        {lessonData.map((lesson, index) => {
          return (
            <AddingLessonForm
              key={index}
              {...lesson[index]}
              index={index}
              updateState={updateLesson(index)}
            />
          );
        })}
        <FullSizeButton
          buttonLabel={t("Insert New Lesson")}
          onClick={insertNewLesson}
        />
        <Grid item xs={3}>
          <Button
          disabled={disableButton}
          type='submit'
          fullWidth
          variant='contained'
          onClick={handleSubmit}
          style={{ backgroundColor: '#3f51b5' }}
          sx={{
            mt: 3,
            mb: 2,
          }}
          >
            {t("Submit")}
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default CreateCourse;

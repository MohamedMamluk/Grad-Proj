import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import AddingLessonForm from '../../../../../components/AddingNewCourseForm/addingLesson';
import AddingNewCourseForm from '../../../../../components/AddingNewCourseForm/addingNewCourse';
import AddingCourseInfoForm from '../../../../../components/AddingNewCourseForm/addingCourseInfo';
import FullSizeButton from '../../../../../components/buttons/FullSizeButton';
import axios from 'axios';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const lessonDataObject = { type: '', title: '', link: '', description: '' };

const UpdateCourse = () => {
  const auth = useSelector((store) => store.auth);
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
    isPaied: '',
    img: '', //to be handeled
  });
  const [lessonData, setLessonData] = useState([]);
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

  const { id } = useParams();
  useEffect(() => {
    const getCourse = async () => {
      const course = await axios.get(`http://localhost:7000/api/course/${id}`);
      setNewCourse({
        courseTitle: course.data.name,
        courseDuration: course.data.duration,
        paid: course.data.is_paid ? 'paid' : 'free',
        isPaied: course.data.cost,
        img: course.data.image,
        courseInfo: course.data.courseInfo,
      });
      const { data: courseInfo } = await axios.get(
        `http://localhost:7000/api/courseinfo/${course.data.courseInfo}`
      );
      setcourseInfoData({
        categories: [{ name: 'name' }],
        description: courseInfo.description,
        level: courseInfo.level,
        whatYouWillLearn: courseInfo.whatYouWillLearn,
        courseLessons: courseInfo.courseLessons,
      });
      await axios.all(
        courseInfo.courseLessons.map(async (lesson) => {
          const lessonDataAxios = await axios.get(
            `http://localhost:7000/api/lesson/${lesson.lessonId}`
          );
          setLessonData((prev) => {
            return [
              ...prev,
              {
                type: lessonDataAxios.data.type,
                title: lessonDataAxios.data.title,
                link: lessonDataAxios.data.link,
                description: lessonDataAxios.data.description,
                id: lesson.lessonId,
              },
            ];
          });
        })
      );
      // //console.log(lessonsData);
    };
    getCourse();
  }, []);

  const handleCoursePatch = () => {
    const newCourseData = {
      name: newCourse.courseTitle,
      cost: newCourse.isPaied,
      is_paid: newCourse.paid == 'free' ? false : true,
      duration: newCourse.courseDuration,
    };
    axios.patch(`http://localhost:7000/api/course/${id}`, newCourseData);
  };
  const handleCourseInfoPatch = () => {
    axios.patch(
      `http://localhost:7000/api/courseinfo/${newCourse.courseInfo}`,
      {
        categories: [{ name: 'name' }],
        description: courseInfoData.description,
        level: courseInfoData.level,
        whatYouWillLearn: courseInfoData.whatYouWillLearn,
      },
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
  };
  const handleLessonsPatch = () => {
    lessonData.map((lesson) => {
      if (!lesson.id) {
        axios.post('http://localhost:7000/api/lesson', lesson).then((res) => {
          axios.patch(
            `http://localhost:7000/api/courseinfo/${newCourse.courseInfo}`,
            {
              courseLessons: [
                ...courseInfoData.courseLessons,
                { lessonId: res.data._id },
              ],
            },
            {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }
          );
        });
      } else {
        axios.patch(`http://localhost:7000/api/lesson/${lesson.id}`, lesson, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
      }
    });
  };
  return (
    <div>
      <Box component='form' noValidate sx={{ mt: 3 }}>
        <AddingNewCourseForm {...newCourse} setNewCourse={setNewCourse} />
        {/* <Button>Update Course</Button> */}
        <FullSizeButton
          onClick={() => handleCoursePatch()}
          buttonLabel={'Update Course'}
        ></FullSizeButton>

        <AddingCourseInfoForm
          {...courseInfoData}
          updateCourseInfo={setcourseInfoData}
        />
        <FullSizeButton
          onClick={() => handleCourseInfoPatch()}
          buttonLabel={'Update CourseInfo'}
        ></FullSizeButton>

        {lessonData.map((lesson, index) => {
          //console.log(lesson);
          return (
            <AddingLessonForm
              key={index}
              // {...lesson[index]}
              type={lesson.type}
              link={lesson.link}
              description={lesson.description}
              title={lesson.title}
              index={index}
              updateState={updateLesson(index)}
            />
          );
        })}
        <FullSizeButton
          buttonLabel={'Insert New Lesson'}
          onClick={insertNewLesson}
        />
        <FullSizeButton
          onClick={() => handleLessonsPatch()}
          buttonLabel={'Update Lessons'}
        ></FullSizeButton>
      </Box>
    </div>
  );
};

export default UpdateCourse;

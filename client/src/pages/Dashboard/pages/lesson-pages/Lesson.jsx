import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Video from '../../../../components/lessonTypes/Video';
import LessonNav from '../../../../components/lessonNav/lessonNav';
import { useTranslation } from 'react-i18next';
const Lesson = () => {
  const { id: lessonid } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.auth);
  const [courseInfo, setCourseInfo] = useState({});
  const [lesson, setLesson] = useState({});
  let [t, i18n] = useTranslation();
  useEffect(() => {
    console.log('IN LESSON PAGE');
    const getLesson = async () => {
      const data = await axios.get('/lesson/' + lessonid);
      setLesson(data.data);
      const courseInfoData = await axios.get(
        '/courseinfo/' + data.data.courseInfoId
      );
      setCourseInfo(courseInfoData.data);
    };
    const updateLessonsFinished = async () => {
      console.log('IN UPDATE LESSON FINISHED ', lessonid);
      const lessonFinished = await axios.patch('/lessonsFinished/' + lessonid, {
        studentId: userData.id,
      });
      console.log(lessonFinished.data);
    };
    updateLessonsFinished();
    getLesson();
  }, [lessonid]);
  if (!lesson._id) {
    return <h1>{t("loading...")}</h1>;
  }
  return (
    <>
      <Video videoLink={lesson.link} />
      {/* {courseInfo.courseLessons&& */}
      {/* <LessonNav lessonArr={courseInfo?.courseLessons} courseId={lesson?.courseId}/> */}
      {/* } */}
    </>
  );
};

export default Lesson;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';
import Video from "../../../../components/lessonTypes/Video";
import LessonNav from "../../../../components/lessonNav/lessonNav";


const Lesson = () => {
  const {id:lessonid} = useParams();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.auth);
  const [courseInfo, setCourseInfo] = useState({});
  const [lesson, setLesson] = useState({});
useEffect(()=>{
  const getLesson = async()=>{
    const data = await axios.get('/lesson/'+lessonid)
    setLesson(data.data)
    const courseInfoData = await axios.get('/courseinfo/'+data.data.courseInfoId)
    setCourseInfo(courseInfoData.data)
  }
  getLesson()
},[lessonid])
if(!lesson._id){
  return <h1>loading...</h1>
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

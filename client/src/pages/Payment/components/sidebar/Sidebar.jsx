import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './sidebar.module.css';
const CoursePaymentCard = ({ courseData }) => {
  // console.log(courseData);
  const [instructor, setInstructor] = useState(null);
  const [courseInfo, setCourseInfo] = useState(null);
  useEffect(() => {
    const getInstructor = async () => {
      const { data: instructorData } = await axios.get(
        '/instructor/' + courseData.instructor
      );
      setInstructor(instructorData.user);
    };
    const getCourseInfo = async () => {
      const { data: courseInfoData } = await axios.get(
        '/courseInfo/' + courseData.courseInfo
      );
      setCourseInfo(courseInfoData);
    };
    getCourseInfo();
    getInstructor();
  }, [courseData.instructor]);
  if (!instructor || !courseInfo) {
    return;
  }
  return (
    <div className={styles.sidebar_container}>
      <div id='instructorData' className={styles.instructorData}>
        <div
          id='instructor_image-container'
          className={styles.instructor_image__container}
        >
          <img
            src={instructor?.image}
            id='instructor_image'
            className={styles.instructor_image}
            alt={instructor?.firstName}
          />
        </div>
        <h5>
          {instructor.firstName} {instructor.lastName}
        </h5>
      </div>
      <div id='courseData' className={styles.courseData}>
        <div id='course_title-price' className={styles.course_title_price}>
          <span className={styles.course_title}>{courseData.name}</span>
          <span className={styles.course_price}>{courseData.cost}$</span>
        </div>
        <div id='course_image' className={styles.course_image__container}>
          <img
            src={courseData.image}
            id='instructor_image'
            className={styles.course_image}
            alt={courseData.name}
          />
        </div>
        <div id='course_description' className={styles?.course_description}>
          <p>{courseInfo.description}</p>
        </div>
        <div id='course_lessons' className={styles.course_lessons}>
          <p>{courseInfo.courseLessons.length} Lessons</p>
          <p>Free Updates Forever</p>
        </div>
      </div>
    </div>
  );
};
export default CoursePaymentCard;

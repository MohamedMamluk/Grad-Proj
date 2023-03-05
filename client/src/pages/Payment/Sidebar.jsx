import React from 'react';
import styles from './sidebar.module.css';
const CoursePaymentCard = ({ courseData }) => {
  return (
    <div className={styles.sidebar_container}>
      <div id='image-container' className={styles.image_container}>
        <img className={styles.image} src={courseData.image} alt='' />
      </div>
      <div id='course-Data-Container' className={styles.course_data_container}>
        <h2 className={styles.course_data_title}>
          course title: Learn Business
        </h2>
        <h3 className={styles.course_data_instructor}>
          instructor: insert name here
        </h3>
        <h4 className={styles.course_data_payNumber}>
          payment number: 12314121
        </h4>
        <p className={styles.course_data_cost}>
          price:{' '}
          <span className={styles.course_data_price}>
            {courseData.cost}.00$
          </span>
        </p>
      </div>
    </div>
  );
};
export default CoursePaymentCard;

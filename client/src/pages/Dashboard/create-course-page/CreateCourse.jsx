import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import AddingLessonForm from '../../../components/AddingNewCourseForm/addingLesson';
import AddingNewCourseForm from '../../../components/AddingNewCourseForm/addingNewCourse';
import FullSizeButton from '../../../components/buttons/FullSizeButton';
const lessonDataObject = { type: '', title: '', link: '', description: '' };
const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    mainCourseData: {},
    courseInfoData: {},
    lessonsData: [lessonDataObject],
  });
  useEffect(() => {
    console.log(courseData);
  }, [courseData]);
  const insertNewLesson = useCallback(() => {
    setCourseData((prev) => ({
      ...prev,
      lessonsData: [...prev.lessonsData, lessonDataObject],
    }));
  }, []);

  const updateLesson = (index) => (e) => {
    const updatedState = [...courseData.lessonsData];
    updatedState.splice(index, 1, {
      ...updatedState[index],
      [e.target.name]: e.target.value,
    });
    setCourseData((prev) => ({ ...prev, lessonsData: updatedState }));
  };
  return (
    <div>
      <AddingNewCourseForm />

      {courseData.lessonsData.map((lesson, index) => (
        <AddingLessonForm
          key={index}
          {...lesson[index]}
          index={index}
          updateState={updateLesson(index)}
        />
      ))}
      <FullSizeButton
        buttonLabel={'Insert New Lesson'}
        onClick={insertNewLesson}
      />
    </div>
  );
};

export default CreateCourse;

const {
  getAStudentService,
  updateStudentByIdService,
} = require('../student/student.service');
const {
  getCourseInfoByIDService,
  updateCourseInfoByIDService,
} = require('../courseInfo/courseInfo.service');
const {
  addNewLessonsFinishedService,
} = require('../lessonsFinished/lessonsFinished.service');

const handleEnrollment = async (studentID, courseInfoID, courseID) => {
  try {
    const student = await getAStudentService(studentID);
    const courseInfo = await getCourseInfoByIDService(courseInfoID);
    student.courses.push(courseID);
    courseInfo.enrolledStudents.push(studentID);
    await updateStudentByIdService(studentID, student);
    await updateCourseInfoByIDService(courseInfoID, courseInfo);
    const lessons = courseInfo.courseLessons.map((lesson) => ({
      lessonId: lesson._id,
    }));
    const newLessonsFinished = await addNewLessonsFinishedService(
      lessons,
      studentID,
      courseInfoID
    );
    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { handleEnrollment };

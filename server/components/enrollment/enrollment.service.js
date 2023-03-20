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

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const handleEnrollment = async (studentID, courseInfoID, courseID) => {
  try {
    const student = await getAStudentService(studentID);
    const courseInfo = await getCourseInfoByIDService(courseInfoID);
    student.courses.push(courseID);
    courseInfo.enrolledStudents.push(studentID);
    await updateStudentByIdService(studentID, student);
    await updateCourseInfoByIDService(courseInfoID, courseInfo);
    const lessons = courseInfo.courseLessons.map((lesson) => ({
      lessonId: lesson.lessonId,
    }));
    const newLessonsFinished = await addNewLessonsFinishedService(
      lessons,
      studentID,
      courseInfoID
    );
    if (!newLessonsFinished) {
      return false;
    }
    return true;
  } catch (error) {
    //console.log(error);
  }
};

const createIntent = async (coursePrice) => {
  return stripe.paymentIntents.create({
    currency: 'EUR',
    amount: coursePrice * 100,
    automatic_payment_methods: { enabled: true },
  });
};

module.exports = { handleEnrollment, createIntent };

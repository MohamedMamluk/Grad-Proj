const { StatusCodes } = require('http-status-codes');
const { getCourseByIDService } = require('../course/course.service');
const {
  updateInstructor,
  getInstructorById,
} = require('../instructor/instructor.service.js');
const { handleEnrollment, createIntent } = require('./enrollment.service');

// If student is already enrolled do nothing TODO

const createPaymentIntent = async (req, res) => {
  try {
    const courseData = await getCourseByIDService(req.params.courseID);
    if (!courseData.is_paid) {
      const tryToEnroll = handleEnrollment(
        req.user.id,
        courseData.courseInfo,
        req.params.courseID
      );
      if (tryToEnroll) {
        return res.status(StatusCodes.OK).send('course Enrolled');
      } else {
        return res.status(StatusCodes.BAD_REQUEST).send('something went wrong');
      }
    }
    //Handle payment intent and send it back to front
    const intent = await createIntent(courseData.cost);
    res.send({
      clientSecret: intent.client_secret,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Server is on fire');
  }
};

const confirmAddition = async (req, res) => {
  try {
    const courseData = await getCourseByIDService(req.body.courseId);
    const tryToEnroll = handleEnrollment(
      req.user.id,
      courseData.courseInfo,
      req.body.courseId
    );
    if (tryToEnroll) {
      const instructorData = await getInstructorById(courseData.instructor);
      instructorData.balance.push({
        cost: Math.floor((+courseData.cost * 80) / 100),
        courseId: courseData._id,
      });
      await updateInstructor(courseData.instructor, instructorData);
      return res.status(StatusCodes.OK).send('course Enrolled');
    } else {
      return res.status(StatusCodes.BAD_REQUEST).send('something went wrong');
    }
  } catch (error) {
    //console.log(error);
  }
};

module.exports = { createPaymentIntent, confirmAddition };

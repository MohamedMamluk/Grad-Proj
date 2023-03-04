const { getCourseByIDService } = require('../course/course.service');
const { handleEnrollment } = require('./enrollment.service');
const createPaymentIntent = async (req, res) => {
  try {
    const courseData = await getCourseByIDService(req.params.courseID);
    if (!courseData.is_paid) {
      const handleEnroll = handleEnrollment(
        req.user.id,
        courseData.courseInfo,
        req.params.courseID
      );
      if (handleEnroll) {
        return res.send('course Enrolled');
      } else {
        return res.send('something went wrong');
      }
    }
    res.send('course is paid');
  } catch (error) {}
};

const confirmAddition = async (req, res) => {
  res.send('in confirm route');
};

module.exports = { createPaymentIntent, confirmAddition };

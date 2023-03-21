const express = require('express');
const { register, login } = require('./auth.controller');
const router = express.Router();
const checkUserExists = require('../../middleware/checkUserExists');
const resetPasswordExist = require('../../middleware/resetPassword');
const loginValidation = require('../../middleware/loginValidations');
const AdminModel = require('../admin/admin.model');
const StudentModel = require('../student/student.model');
const InstructorModel = require('../instructor/instructor.model');
const registerValidation = require('../../middleware/registerValidation');
const { verifyUser } = require('./auth.service');
const {
  sendConfirmationEmail,
  sendResetPassword,
} = require('../../utils/nodemailer');

router.post(
  '/register',
  checkUserExists(AdminModel, StudentModel, InstructorModel),
  registerValidation,
  register
);
router.post(
  '/login',
  loginValidation(AdminModel, StudentModel, InstructorModel),
  login
);
router.post(
  '/confirm/:confirmationCode',
  verifyUser(StudentModel, InstructorModel),
  (req, res) => {
    res.send('Confirmed');
  }
);
//req.body {user email}=>> send email
router.post(
  '/reset',
  resetPasswordExist(AdminModel, StudentModel, InstructorModel),
  async (req, res) => {
    console.log(req.user);
    const OTP = Math.floor(Math.random() * 9000 + 1000);

    await sendResetPassword(req.body.email, OTP);
    switch (req.user.role) {
      case 'student':
        req.user.resetCode = OTP;
        console.log(req.user);
        const newStudent = await StudentModel.findByIdAndUpdate(
          req.user._id,
          req.user,
          { new: true }
        );
        res.send(newStudent);
        break;
      case 'instructor':
        req.user.resetCode = OTP;
        console.log(req.user);
        const newInstructor = await InstructorModel.findByIdAndUpdate(
          req.user._id,
          req.user,
          { new: true }
        );
        res.send(newInstructor);

        break;

      default:
        break;
    }
  }
);
module.exports = router;

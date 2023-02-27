const express = require('express');
const { register, login } = require('./auth.controller');
const router = express.Router();
const checkUserExists = require('../../middleware/checkUserExists');
const loginValidation = require('../../middleware/loginValidations');
const AdminModel = require('../admin/admin.model');
const StudentModel = require('../student/student.model');
const InstructorModel = require('../instructor/instructor.model');
const registerValidation = require('../../middleware/registerValidation');

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

module.exports = router;

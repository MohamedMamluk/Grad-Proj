const express = require('express');
const { register, login } = require('./auth.controller');
const router = express.Router();
const checkUserExists = require('../../middleware/checkUserExists');
const AdminModel = require('../admin/admin.model');
const StudentModel = require('../student/student.model');
const InstructorModel = require('../instructor/instructor.model');

router.post('/register', checkUserExists(AdminModel,StudentModel,InstructorModel), register);
router.post('/login', login);

module.exports = router;

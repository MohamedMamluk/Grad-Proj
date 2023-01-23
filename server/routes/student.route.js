const express = require('express');
const router = express.Router();
const { addStudent } = require('../controllers/student.controller');
router.post('/', addStudent);

module.exports = router;

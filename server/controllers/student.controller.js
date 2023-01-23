const Student = require('../models/student.model');
const { StatusCodes } = require('http-status-codes');
const addStudent = async (req, res) => {
  try {
    let student = await Student.create(req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ status: 'ok', data: [student], message: 'Student registered' });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ status: 'failed', data: [], message: error });
  }
};

module.exports = {
  addStudent,
};

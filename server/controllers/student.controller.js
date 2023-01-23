const Student = require('../models/student.model');

const addStudent = async (req, res) => {
  try {
    let student = await Student.create(req.body);
    res
      .status(201)
      .json({ status: 'ok', data: [student], message: 'Student registered' });
  } catch (error) {
    res.status(400).json({ status: 'failed', data: [], message: error });
  }
};

module.exports = {
  addStudent,
};

const {
  getAllStudentsService,
  getAStudentService,
  updateStudentByIdService,
  deleteStudentByIdService,
} = require('./student.service');
const bcrypt = require('bcrypt');
var GetAllStudents = async (req, res) => {
  try {
    var AllStudents = await getAllStudentsService();
    res.status(200).json(AllStudents);
  } catch (err) {
    res.status(400).json(err);
  }
};

var GetStudentByID = async (req, res) => {
  try {
    var StudentID = req.params.id;
    var foundStudent = await getAStudentService(StudentID);
    res.status(200).json({ user: foundStudent });
  } catch (err) {
    res.status(400).json(err);
  }
};

var UpdateStudent = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    var UpdateStudent = req.body;
    var StudentID = req.params.id;
    console.log(StudentID);
    console.log(req.body);
    var newData = await updateStudentByIdService(StudentID, UpdateStudent);
    res.status(200).json(newData);
  } catch (err) {
    res.status(400).json(err);
  }
};

var DeleteStudentByID = async (req, res) => {
  try {
    var StudentID = req.params.id;
    var deletedStudent = await deleteStudentByIdService(StudentID);
    res.status(200).json(deletedStudent);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  GetAllStudents,
  GetStudentByID,
  UpdateStudent,
  DeleteStudentByID,
};

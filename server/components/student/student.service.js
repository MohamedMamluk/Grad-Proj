const StudentSchema = require('./student.model.js');

//get all students
const getAllStudentsService = async () => {
  return StudentSchema.find();
};

//get student by id
const getAStudentService = async (_id) => {
  return StudentSchema.findOne({ _id });
};

//Update student by id
const updateStudentByIdService = async (_id, newData) => {
  console.log('in update service');
  console.log(_id, newData);
  return StudentSchema.findByIdAndUpdate({ _id }, newData, { new: true });
};

//delete student by id
const deleteStudentByIdService = async (_id) => {
  return StudentSchema.findByIdAndDelete({ _id });
};

module.exports = {
  getAllStudentsService,
  getAStudentService,
  updateStudentByIdService,
  deleteStudentByIdService,
};

const Lesson_Schema = require('./lesson.model');

const getAllLessonService = async () => {
  return Lesson_Schema.find();
};

const getLessonServiceByID = async (_id) => {
  return Lesson_Schema.findOne({ _id });
};

const addNewLessonService = async (newData) => {
  //console.log(newData)
  return Lesson_Schema.create(newData);
};
const updateLessonServiceByID = async (_id, newData) => {
  return Lesson_Schema.findByIdAndUpdate({ _id }, newData, { new: true });
};
const deleteLessonService = async (_id) => {
  return Lesson_Schema.findByIdAndDelete(_id);
};
module.exports = {
  getAllLessonService,
  getLessonServiceByID,
  addNewLessonService,
  updateLessonServiceByID,
  deleteLessonService,
};

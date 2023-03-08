const LessonFinished_Schema = require('./lessonsFinished.model');

const getAllLessonsFinishedService = async (filter) => {
  return LessonFinished_Schema.find(filter);
};

const getOneLessonFinishedByIdService = async (
  studentId,
  courseInfoId,
  lessonID
) => {
  const lessonFinished = await LessonFinished_Schema.findOne({
    studentId,
    courseInfoId,
  });
  const lesson = lessonFinished.lessons.find(
    (lesson) => lesson.lessonId == lessonID
  );
};

const addNewLessonsFinishedService = async (
  lessons,
  studentId,
  courseInfoId
) => {
  return LessonFinished_Schema.create({ lessons, studentId, courseInfoId });
};

const updateLessonFinishedByIdService = async (_id, newData) => {
  return LessonFinished_Schema.findByIdAndUpdate();
};

const deleteLessonFinishedByIdService = async () => {
  return LessonFinished_Schema.findByIdAndDelete();
};

module.exports = {
  getAllLessonsFinishedService,
  getOneLessonFinishedByIdService,
  addNewLessonsFinishedService,
  updateLessonFinishedByIdService,
  deleteLessonFinishedByIdService,
};

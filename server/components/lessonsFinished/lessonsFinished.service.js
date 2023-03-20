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
const setLessonFinished = async (studentID, lessonID) => {
  const lessonsForStudent = await LessonFinished_Schema.find({
    studentId: studentID,
  });
  lessonsForStudent.map(async (lessonFinished) => {
    let lesson = lessonFinished.lessons.find(
      (lesson) => lesson.lessonId == lessonID
    );
    if (lesson) {
      const index = lessonFinished.lessons.indexOf(lesson);

      lesson.isFinished = true;
      let newLessons = lessonFinished.lessons.splice(index, 1, lesson);
      const newLessonsFinished = await LessonFinished_Schema.findByIdAndUpdate(
        lessonFinished._id,
        {
          ...lessonFinished,
          lessons: newLessons,
        },
        {
          new: true,
        }
      );
      console.log(newLessonsFinished);
    }
  });
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
  setLessonFinished,
};

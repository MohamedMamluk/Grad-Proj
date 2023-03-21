const { StatusCodes } = require('http-status-codes');
const {
  getAllLessonsFinishedService,
  getOneLessonFinishedByIdService,
  addNewLessonsFinishedService,
  updateLessonFinishedByIdService,
  deleteLessonFinishedByIdService,
  setLessonFinished,
} = require('./lessonsFinished.service');

const getAllLessonsFinished = async (req, res) => {
  try {
    const data = req.params;
    const ress = await getAllLessonsFinishedService(data);
    // console.log(ress);
    res.status(200).json(ress);
  } catch (error) {
    console.log(error);
  }
};

const getOneLessonFinished = async (req, res) => {};

const createLessonsFinished = async (req, res) => {};

const updateLessonFinished = async (req, res) => {
  try {
    const { studentId } = req.body;
    const { id: lessonId } = req.params;
    await setLessonFinished(studentId, lessonId);
    res.status(StatusCodes.OK).send('Updated');
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const deleteLessonFinished = async (req, res) => {};

module.exports = {
  getAllLessonsFinished,
  getOneLessonFinished,
  createLessonsFinished,
  updateLessonFinished,
  deleteLessonFinished,
};

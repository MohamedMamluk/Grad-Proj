const {
  getAllLessonsFinishedService,
  getOneLessonFinishedByIdService,
  addNewLessonsFinishedService,
  updateLessonFinishedByIdService,
  deleteLessonFinishedByIdService,
} = require ('./lessonsFinished.service')

const getAllLessonsFinished = async (req, res) => {
  try {
    const data=req.params;
    const ress = await getAllLessonsFinishedService(data);
    // console.log(data)
    res.status(200).json(ress);
  } catch (error) {
    console.log(error);
  }
};

const getOneLessonFinished = async (req, res) => {};

const createLessonsFinished = async (req, res) => {};

const updateLessonFinished = async (req, res) => {};

const deleteLessonFinished = async (req, res) => {};

module.exports = {
  getAllLessonsFinished,
  getOneLessonFinished,
  createLessonsFinished,
  updateLessonFinished,
  deleteLessonFinished,
};

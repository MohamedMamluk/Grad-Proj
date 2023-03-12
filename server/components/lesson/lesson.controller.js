const {
  getAllLessonService,
  getLessonServiceByID,
  addNewLessonService,
  updateLessonServiceByID,
  deleteLessonService,
} = require('./lesson.service');

const createLesson = async (req, res) => {
  try {
    var data = await addNewLessonService(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getAllLessonInfo = async (req, res) => {
  try {
    var data = await getAllLessonService();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getLessonByID = async (req, res) => {
  try {
    var data = await getLessonServiceByID(req.params.id);

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateLesson = async (req, res) => {
  try {
    var _id = req.params.id;
    var newData = req.body;
    var data = await updateLessonServiceByID(_id, newData);
    res.status(200).json({ data, msg: 'Update Successful' });
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteLesson = async (req, res) => {
  try {
    var data = await deleteLessonService(req.params.id);
    res.status(200).json(data);
    if (data) {
      res.status(200).json({ data, msg: 'Success' });
    } else {
      res.status(404).send('does not exist to delete yasta');
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createLesson,
  getAllLessonInfo,
  getLessonByID,
  updateLesson,
  deleteLesson,
};

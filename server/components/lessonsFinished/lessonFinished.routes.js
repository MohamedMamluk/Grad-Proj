const express = require('express');

const router = express.Router();

const {
  getAllLessonsFinished,
  updateLessonFinished,
  createLessonsFinished,
  deleteLessonFinished,
  getOneLessonFinished,
} = require('./lessonsFinished.controller');

//GET
router.get('/', getAllLessonsFinished);
router.get('/:id', getOneLessonFinished);

//GET BY STD ID
router.get('/std/:studentId',getAllLessonsFinished);

//POST
router.post('/', createLessonsFinished);

//UPDATE
router.patch('/:id', updateLessonFinished);

//DELETE
router.delete('/:id', deleteLessonFinished);

module.exports = router;

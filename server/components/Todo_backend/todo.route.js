const express = require('express');

const {
  getAllToDo,
  getOneToDo,
  saveToDo,
  deleteToDoById,
  updateToDoById,
} = require('./todo.controller');

const router = express();

router.get('/', getAllToDo);
router.get('/user/:studentId', getAllToDo);

router.get('/:id', getOneToDo);

router.post('/', saveToDo);

router.patch('/:id', updateToDoById);

router.delete('/:id', deleteToDoById);

module.exports = router;

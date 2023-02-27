const express = require("express");
const app = express();
const router = express.Router();
const lessonModel = require("./lesson.model");
const createLesson = require('./lesson.controller');

//Posts
router.post(
    '/create',
    createLesson
)
module.exports = {router}
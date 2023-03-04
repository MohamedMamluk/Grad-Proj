const mongoose = require('mongoose');

const lessonayaSchema = new mongoose.Schema({
  lessonId: {
    type: String,
    required: true,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
});

const lessonFinished = new mongoose.Schema({
  studentId: {
    type: String,
    required: [true, 'Which student are we talking about'],
  },
  lessons: {
    type: [lessonayaSchema],
  },
  courseInfoId: {
    type: String,
  },
});

module.exports = mongoose.model('LessonFinished', lessonFinished);

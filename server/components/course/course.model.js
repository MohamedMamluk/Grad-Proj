const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [6, 'Please provide a suitable course name.'],
    required: [true, 'Course name is required.'],
  },
  cost: {
    type: String,
    required: [true, 'Course cost is required.'],
  },
  is_paid: {
    type: Boolean,
    required: true,
  },
  duration: {
    type: String,
    required: [true, 'Course duration is required.'],
  },
  image: {
    type: String,
    required: [true, 'Course image is required'],
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'instructor',
    required: [true, "Please provide the Instructor's id"],
  },
  courseInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courseInfo',
    required: true,
  },
});

module.exports = mongoose.model('course', courseSchema);

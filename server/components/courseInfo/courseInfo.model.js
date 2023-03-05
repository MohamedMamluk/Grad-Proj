const mongoose = require('mongoose');

const courseInfoSchema = new mongoose.Schema({
  categories: {
    type: [
      new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
      }),
    ],
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: 'categories is required, Provide at least 1 object.',
    },
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
    minLength: [
      20,
      'Please provide a suitable course description that exceeds 20 characters',
    ],
  },
  reviews: {
    type: [
      new mongoose.Schema({
        rating: {
          type: Number,
          required: true,
        },
        reviewText: {
          type: String,
        },
      }),
    ],
    default: [],
  },
  views: {
    type: Number,
    default: 0,
  },
  enrolledStudents: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'student',
    default: [],
  },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'instructor',
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: [true, 'Course Level is required.'],
  },
  whatYouWillLearn: {
    type: [
      new mongoose.Schema({
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      }),
    ],
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: 'WhatYouWillLearn is required, Provide at least 1 object.',
    },
  },
  courseLessons: {
    type: [
      new mongoose.Schema({
        lessonId: {
          type: mongoose.Types.ObjectId,
          ref: 'lesson',
          required: true,
        },
      }),
    ],
  },
});

module.exports = mongoose.model('courseInfo', courseInfoSchema);

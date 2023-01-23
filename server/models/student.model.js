const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, 'Email is already registered'],
  },
  password: {
    type: String,
    minLength: 8,
    required: [true, 'Password is required.'],
  },
  courses: {
    type: [{ courseId: String, isFinished: Boolean, isAccessable: Boolean }],
  },
  payment: {},
  age: {
    type: Number,
    required: [true, 'Age is required.'],
  },
  profession: {
    type: String,
  },
});
module.exports = mongoose.model('student', studentSchema);

const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Video', 'Test', 'Resources', 'Certificate'],
      required: [true, 'Please Enter The Lesson Type'],
    },
    title: {
      type: String,
      required: [true, 'Please Enter The Lesson Title'],
    },

    link: {
      type: String,
      required: [true, 'Enter the Link'],
    },
    description: {
      type: String,
      required: [
        true,
        'Please Provide a brief description for what this lesson contains',
      ],
      minLength: [
        50,
        'Please Provide an Explanation that exceeds 50 Characters',
      ],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Lesson', lessonSchema);

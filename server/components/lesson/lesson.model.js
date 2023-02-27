const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    type:{
        type: String,
        required: [true, 'Please Enter The Lesson Type']
    },
    title:{
        type: String,
        required: [true, 'Please Enter The Lesson Title']
    },
    isVideo:{
        type: Boolean,
        required: [true, "Relevent when creating Lesson"]
    },
    video:{
        type: String,
    },
    exam:{
        type: String,
    },
    resources:{
        type: String,
    },
    cert:{
        type: String,
    },
    courseId:{
        type: mongoose.Schema.Types.ObjectId
    },
    description:{
        type: String,
        required: [true, "Please Provide a brief description for what this lesson contains"]
    }}
,{ timestamps: true })
module.exports = {lessonSchema}
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    studentId:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    markAsDone:{
        type: Boolean,
        default: false
    },
},{timestamps:true});

module.exports = mongoose.model('ToDo', todoSchema);
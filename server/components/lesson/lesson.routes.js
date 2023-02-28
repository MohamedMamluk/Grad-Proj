const express = require("express");
const router = express.Router();
const {createLesson, getAllLessonInfo, getLessonByID, updateLesson, deleteLesson} = require('./lesson.controller');
const {lessonDTO, patchLessonDTO} = require('./lessonDTO')

//Get
router.get(
    '/',
    getAllLessonInfo
)
router.get(
    '/:id',
    getLessonByID
)

//Posts
router.post(
    '/',
    (req,res,next)=>{
        let valid = lessonDTO(req.body)
        if (valid){
            next();
        }else{
            return res.status(400).json(lessonDTO.errors)
        }
    },
    createLesson
)
//Patch
router.patch(
    '/:id',
    (req,res,next)=>{
        let valid = patchLessonDTO(req.body)
        if (valid){
            next();
        }else{
            return res.status(400).json(patchLessonDTO.errors)
        }
    },
    updateLesson
)
//Delete
router.delete(
    '/:id',
    deleteLesson
)

module.exports = router
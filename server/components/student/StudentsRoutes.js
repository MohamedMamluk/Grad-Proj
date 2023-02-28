const express = require("express");
const router =  express.Router();
const studentsControllers = require("./StudentController");
const studentDTO = require("./studentDTO")

//POST
router.post(
    "/",
    (req,res,next)=>{
        const valid = studentDTO(req.body);
        if(valid){
            return next();
        }else{
            res.status(400).json(studentDTO.errors)
        }
    },
    studentsControllers.AddNewStudent
)

//GET
router.get(
    "/",
    studentsControllers.GetAllStudents
)

router.get(
    "/:id",
    studentsControllers.GetStudentByID
)

//UPDATE
router.patch(
    "/:id",
    studentsControllers.UpdateStudent
)

//DELETE
router.delete(
    "/:id",
    studentsControllers.DeleteStudentByID
)

module.exports = router;
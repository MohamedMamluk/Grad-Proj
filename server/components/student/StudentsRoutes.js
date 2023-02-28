const express = require("express");
const router =  express.Router();
const studentsControllers = require("./StudentController");
const studentDTO = require("./studentDTO")

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
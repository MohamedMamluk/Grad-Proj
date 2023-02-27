const express = require("express");
const router = new express.Router();
const studentsControllers = require("./StudentController");

router.post("/",studentsControllers.AddNewStudent)
router.get("/",studentsControllers.GetAllStudents)
router.get("/:id",studentsControllers.GetStudentByID)
router.put("/:id",studentsControllers.UpdateStudent)
router.delete("/:id",studentsControllers.DeleteStudentByID)
module.exports = router;
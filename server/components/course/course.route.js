const express = require("express");
const router = express.Router();
const courseController = require("./course.controller.js");
const courseSchema = require("./course.model.js");
router.get("/", courseController.getAllCourse);
router.post(
  "/",
  (req, res, next) => {
    const valid = courseSchema(req.body);
    if (!valid) {
      return res.status(400).json(courseDto.errors);
    }
    return next();
  },
  courseController.addNewCourse
);

router
  .route("/:id")
  .get(courseController.getCourseByID)
  .patch(courseController.updateCourseByID)
  .delete(courseController.deleteCourseByID);

module.exports = router;

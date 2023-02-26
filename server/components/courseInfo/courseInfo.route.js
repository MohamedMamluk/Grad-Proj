const express = require("express");
const router = express.Router();
const courseInfoController = require("./courseInfo.controller.js");

/*
 * / ->get all coursesInfo  "get"
 * /id ->get a courseinfo using id  "get"
 * / -> add new courseinfo  "post"
 * /delete/id -> delete courseinfo  "delete"
 * /update/id ->update courseinfo   "patch"
 */

router.get('/',courseInfoController.getAllCourseInfo);
router.post('/',courseInfoController.addNewCourseInfo);

/*
 * router.get('/:id')
 *router.delete("/:id")
 *router.patch('/:id')
 */

 router.route('/:id').get(courseInfoController.getCourseInfoByID).patch(courseInfoController.updateCourseInfoByID).delete(courseInfoController.deleteCourseInfoByID);

 module.exports = router;
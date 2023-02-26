const express = require("express");
const router = express.Router();
const courseInfoController = require("./courseInfo.controller.js");
const courseInfoDto = require('./courseInfoDTO.js')
/*
 * / ->get all coursesInfo  "get"
 * /id ->get a courseinfo using id  "get"
 * / -> add new courseinfo  "post"
 * /delete/id -> delete courseinfo  "delete"
 * /update/id ->update courseinfo   "patch"
 */

router.get('/',courseInfoController.getAllCourseInfo);
router.post('/',(req,res,next)=>{
    const valid = courseInfoDto(req.body);
    if(!valid){
        return res.status(400).json(courseInfoDto.errors)
    }
    return next();
},courseInfoController.addNewCourseInfo);

/*
 * router.get('/:id')
 *router.delete("/:id")
 *router.patch('/:id')
 */

 router.route('/:id').get(courseInfoController.getCourseInfoByID).patch(courseInfoController.updateCourseInfoByID).delete(courseInfoController.deleteCourseInfoByID);

 module.exports = router;
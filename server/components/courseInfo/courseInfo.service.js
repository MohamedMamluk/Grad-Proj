const CourseInfo_Schema = require('./courseInfo.model.js');

const getAllCourseInfoService= async ()=>{
    return CourseInfo_Schema.find();
}
const getCourseInfoByIDService = async (_id)=>{
    return CourseInfo_Schema.findOne({_id});
}
const addNewCourseInfoService = async (newData)=>{
    return CourseInfo_Schema.create(newData);
}
const deleteCourseInfoByIDService = async (_id)=>{
    return CourseInfo_Schema.findByIdAndDelete({_id})
}
const updateCourseInfoByIDService = async(_id , newData)=>{
    return CourseInfo_Schema.findByIdAndUpdate({_id} , newData , {new:true});
}

module.exports = {getAllCourseInfoService,
    getCourseInfoByIDService,
    addNewCourseInfoService,
    deleteCourseInfoByIDService,
    updateCourseInfoByIDService,
}
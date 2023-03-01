const courseSchema = require('./course.model.js');

const getAllCourseService= async ()=>{
    return courseSchema.find();
}
const getCourseByIDService = async (_id)=>{
    return courseSchema.findOne({_id});
}
const addNewCourseService = async (newData)=>{
    return courseSchema.create(newData);
}
const deleteCourseByIDService = async (_id)=>{
    return courseSchema.findByIdAndDelete({_id})
}
const updateCourseByIDService = async(_id , newData)=>{
    return courseSchema.findByIdAndUpdate({_id} , newData , {new:true});
}

module.exports = {getAllCourseService,
    getCourseByIDService,
    addNewCourseService,
    deleteCourseByIDService,
    updateCourseByIDService,
}
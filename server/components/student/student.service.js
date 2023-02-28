const StudentSchema = require('./student.model.js');

//create new student
const createNewStudent = async(data)=>{
    return StudentSchema.create(data)
}

//get all students
const getAllStudentsService  = async()=>{
    return StudentSchema.find();
}

//get student by id
const getAStudentService  = async(_id)=>{
    return StudentSchema.findOne({_id});
}

//Update student by id
const updateStudentByIdService = async(_id , newData)=>{
    return StudentSchema.findByIdAndUpdate({_id},newData,{new:true});
}

//delete student by id
const deleteStudentByIdService = async(_id)=>{
    return StudentSchema.findByIdAndDelete({_id})
}

module.exports = {
    createNewStudent,
    getAllStudentsService,
    getAStudentService,
    updateStudentByIdService,
    deleteStudentByIdService
}
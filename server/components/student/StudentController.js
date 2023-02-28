const {
    getAllStudentsService,
    getAStudentService,
    updateStudentByIdService,
    deleteStudentByIdService} = require('./student.service')



var GetAllStudents = async (req,res)=>{
    try{
        var AllStudents =  await getAllStudentsService();
        res.status(200).json(AllStudents)
    }catch(err){
        res.status(400).json(err)
    }
}

var GetStudentByID = async (req,res)=>{
    try {
        var StudentID = req.params.id;
        var foundStudent = await getAStudentService(StudentID);
        res.status(200).json(foundStudent);
    } catch (err) {
        res.status(400).json(err)
    }
    
}

var UpdateStudent = async (req,res)=>{
    try {
        var UpdateStudent = req.body;
        var StudentID = req.params.id;
        var newData =  await updateStudentByIdService(StudentID,UpdateStudent);
        res.status(200).json(newData);
    } catch (err) {
        res.status(400).json(err)
    }
    
}

var DeleteStudentByID =async (req,res)=>{
    try{
        var StudentID = req.params.id;
        var deletedStudent = await deleteStudentByIdService(StudentID)
        res.status(200).json(deletedStudent);
    }catch(err){
        res.status(400).json(err);
        
    }
}



module.exports = { AddNewStudent , GetAllStudents, GetStudentByID, UpdateStudent, DeleteStudentByID};
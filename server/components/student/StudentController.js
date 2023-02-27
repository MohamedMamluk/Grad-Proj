const StudentsValidator = require("./StudentValidate");
const StudentModel = require("./student.model");

var AddNewStudent = async (req,res)=>
{
    try{
          var student=new StudentModel({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role,
            phone:req.body.phone,
            interests:req.body.interests
             

            })
            if(StudentsValidator)
            {
                await student.save();
                res.status(201).send("Added Successfully")
            }
            else
            {
               await res.status(400).send("NotComaptible..")
            }
    }catch(err)
    {
        console.log(err)
    }
}

var GetAllStudents = async (req,res)=>{
    var AllStudents =  await StudentModel.find();
    res.status(200).json(AllStudents)
}

var GetStudentByID = async (req,res)=>{
    var StudentID = req.params.id;
    var foundStudent = await StudentModel.findById(StudentID)
    res.status(200).json(foundStudent);
}
var UpdateStudent = async (req,res)=>{
    var UpdateStudent = req.body;
    var StudentID = req.params.id;
    var NEW =  await StudentModel.findByIdAndUpdate(StudentID,UpdateStudent)
    res.status(200).json(await StudentModel.findById(StudentID));
}

var DeleteStudentByID =async (req,res)=>{
    var StudentID = req.params.id;
    await StudentModel.findByIdAndRemove(StudentID)
    res.json( await StudentModel.find());
}



module.exports = { AddNewStudent , GetAllStudents, GetStudentByID, UpdateStudent, DeleteStudentByID};
const CourseInfo_Schema = require('./courseInfo.model.js');

let getAllCourseInfo = async (req,res)=>{
    try {
        var data = await CourseInfo_Schema.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
}

let getCourseInfoByID = async (req,res)=>{
    try {
        var _id = req.params.id;
        var data = await CourseInfo_Schema.findByID({_id});
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
}

let addNewCourseInfo = async (req,res)=>{
    try {
        var data = await CourseInfo_Schema.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
}

let deleteCourseInfoByID = async (req,res)=>{
    try {
        var _id = req.params.id;
        var data = await CourseInfo_Schema.findByIdAndDelete({_id});
        if(data){
            res.status(200).json({data , msg:"Deleted Successfuly!..."});
        }else{
            res.status(404).send("ERROR .. you cannot delete something does not exsist!");
        }
    } catch (err) {
        res.status(400).json(err);
    }
}

let updateCourseInfoByID = async(req,res)=>{
    try {
        var _id = req.params.id;
        var newData = req.body;
        var data = await CourseInfo_Schema.findByIdAndUpdate({_id} , newData , {new:true});
        res.status(200).json(data);
    } catch (err) {
        res.status(404).json(err);
    }
}

module.exports={
    getAllCourseInfo,
    getCourseInfoByID,
    addNewCourseInfo,
    deleteCourseInfoByID,
    updateCourseInfoByID,
}
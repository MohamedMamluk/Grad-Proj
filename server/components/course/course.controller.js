const {
  getAllCourseService,
  getCourseByIDService,
  addNewCourseService,
  deleteCourseByIDService,
  updateCourseByIDService,
} = require("./course.service.js");

let getAllCourse = async (req, res) => {
  try {
    var data = await getAllCourseService();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

let getCourseByID = async (req, res) => {
  try {
    var _id = req.params.id;
    var data = await getCourseByIDService(_id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

let addNewCourse = async (req, res) => {
  try {
    var data = await addNewCourseService(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

let deleteCourseByID = async (req, res) => {
  try {
    var _id = req.params.id;
    var data = deleteCourseByIDService(_id);
    if (data) {
      res.status(200).json({ data, msg: "Deleted Successfuly!..." });
    } else {
      res
        .status(404)
        .send("ERROR .. you cannot delete something does not exsist!");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

let updateCourseByID = async (req, res) => {
  try {
    var _id = req.params.id;
    var newData = req.body;
    var data = await updateCourseByIDService(_id, newData);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  getAllCourse,
  getCourseByID,
  addNewCourse,
  deleteCourseByID,
  updateCourseByID,
};

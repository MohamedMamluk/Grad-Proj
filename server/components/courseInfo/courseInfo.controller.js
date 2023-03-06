const {
  getAllCourseInfoService,
  getCourseInfoByIDService,
  addNewCourseInfoService,
  deleteCourseInfoByIDService,
  updateCourseInfoByIDService,
} = require('./courseInfo.service');

let getAllCourseInfo = async (req, res) => {
  try {
    var data = await getAllCourseInfoService();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

let getCourseInfoByID = async (req, res) => {
  try {
    var _id = req.params.id;
    var data = await getCourseInfoByIDService(_id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

let addNewCourseInfo = async (req, res) => {
  try {
    var data = await addNewCourseInfoService(req.body);
    res.status(200).json(data);
  } catch (err) {
    //console.log(err);
    res.status(400).json(err);
  }
};

let deleteCourseInfoByID = async (req, res) => {
  try {
    var _id = req.params.id;
    var data = deleteCourseInfoByIDService(_id);
    if (data) {
      res.status(200).json({ data, msg: 'Deleted Successfuly!...' });
    } else {
      res
        .status(404)
        .send('ERROR .. you cannot delete something does not exist!');
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

let updateCourseInfoByID = async (req, res) => {
  //console.log(req.body);
  try {
    var _id = req.params.id;
    var newData = req.body;
    var data = await updateCourseInfoByIDService(_id, newData);
    //console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  getAllCourseInfo,
  getCourseInfoByID,
  addNewCourseInfo,
  deleteCourseInfoByID,
  updateCourseInfoByID,
};

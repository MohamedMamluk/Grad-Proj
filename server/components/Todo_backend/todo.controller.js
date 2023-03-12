const ToDoModel_schema = require('./todo.model');

let getAllToDo = async (req, res) => {
  try {
    console.log(req.params);
    var todo = await ToDoModel_schema.find(req.params);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

let getOneToDo = async (req, res) => {
  try {
    var _id = req.params.id;
    var todo = await ToDoModel_schema.findById({ _id });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

let saveToDo = async (req, res) => {
  try {
    var text = req.body;
    var new_data = await ToDoModel_schema.create(text);
    res.status(200).json(new_data);
  } catch (err) {
    res.status(400).json(err);
  }
};

let deleteToDoById = async (req, res) => {
  try {
    const _id = req.params.id;
    var data = await ToDoModel_schema.findByIdAndDelete({ _id });
    res.status(200).json({ data, msg: 'Deleted Successfuly!...' });
  } catch (err) {
    res.status(400).json(err);
  }
};

let updateToDoById = async (req, res) => {
  try {
    var _id = req.params.id;
    var newTodo = req.body;
    var data = await ToDoModel_schema.findByIdAndUpdate({ _id }, newTodo, {
      new: true,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllToDo,
  getOneToDo,
  saveToDo,
  deleteToDoById,
  updateToDoById,
};

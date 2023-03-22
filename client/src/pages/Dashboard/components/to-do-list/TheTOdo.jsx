import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import './TheTOdo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from './AddTaskForm';
import UpdateForm from './UpdateForm';
import ToDo from './ToDo.jsx';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const TheTOdo = () => {
  // Tasks (ToDo List) State
  let [t, i18n] = useTranslation();
  const user = useSelector((store) => {
    return store.auth;
  });
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState(null);

  // Add task
  ///////////////////////////
  //axios.post
  const addTask = () => {
    axios
      .post('/todo', {
        text: newTask,
        studentId: user.id,
      })
      .then((res) => {
        setToDo([...toDo, res.data]);
      });
  };
  useEffect(() => {
    axios.get('/todo/user/' + user.id).then((res) => setToDo(res.data));
  }, []);

  // Delete task
  ///////////////////////////
  const deleteTask = (id) => {
    axios.delete('/todo/' + id).then((res) => {
      let newTasks = toDo.filter((task) => task._id !== id);
      setToDo(newTasks);
    });
  };

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    const currentTodo = toDo.find((toDOOOO) => toDOOOO._id === id);
    axios
      .patch('/todo/' + id, {
        ...currentTodo,
        markAsDone: !currentTodo.markAsDone,
      })
      .then((res) => {
        let newTask = toDo.map((task) => {
          if (task._id === id) {
            return { ...task, markAsDone: !task.markAsDone };
          }
          return task;
        });
        setToDo(newTask);
      });
  };

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  };

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      _id: updateData._id,
      text: e.target.value,
      status: updateData.markAsDone,
    };
    setUpdateData(newEntry);
  };

  // Update task
  ///////////////////////////
  const updateTask = (id) => {
    let filterRecords = [...toDo].filter((task) => task._id !== id);
    axios.patch('/todo/' + id, updateData).then((res) => {
      let updatedObject = [...filterRecords, res.data];
      setToDo(updatedObject);
      setUpdateData(null);
    });
  };


  return (
    <div className=' contanier col-sm-12 col-lg-6 col-m-6 testtt'>
     
       
      {updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      { toDo && toDo.length == 0 && t("No Tasks...")}
      
      {/* {uploaded.length > 0 && t("Uploaded ✔")} */}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TheTOdo;

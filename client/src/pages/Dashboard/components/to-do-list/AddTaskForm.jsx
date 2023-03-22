import "./AddTaskForm.css"
import { useTranslation } from 'react-i18next';
const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  let [t, i18n] = useTranslation();
    return(
      <>
        {/* Add Task */}
        
        <div className="d-flex flex-column flex-md-row" style={{height:'36px'}}>
          <div className="h-100" style={{flex:1}}>
            <input 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className=" h-100 w-100"
              placeholder={t("Add Your Tasks")} style={{fontSize:"18px"}}
            />
          </div>
          <div className="">
            <button
              onClick={addTask}
              className="w-100"
              style={{width:'fit-content',padding:'5px 10px',}}
            >{t("Add Task")}</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm;
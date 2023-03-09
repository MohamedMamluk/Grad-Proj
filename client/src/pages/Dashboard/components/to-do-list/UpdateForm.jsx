const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  console.log(updateData)
    return(
      <>
        {/* Update Task */}
        <div className="d-flex flex-column flex-md-row p-1" style={{gap:'5px'}}>
          <div className=" w-100">
            <input 
              value={ updateData && updateData.text }
              onChange={ (e) => changeTask(e)}
              className="h-100 w-100"
            />
          </div>
          <div className="d-flex flex-column flex-md-row h-max" style={{width:'100%',gap:'5px'}}>
            <button
              onClick={()=>updateTask(updateData._id)}
               className="w-100 btn btn-success"
              style={{width:'fit-content',padding:'5px 10px',flex:1,margin:0}}
            >Update</button>
            <button
              onClick={cancelUpdate}
               className="w-100 btn btn-warning"
              style={{width:'fit-content',padding:'5px 10px',flex:1,margin:0}}
              // className="btn btn-lg btn-warning"
            >Cancel</button>
          </div>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;
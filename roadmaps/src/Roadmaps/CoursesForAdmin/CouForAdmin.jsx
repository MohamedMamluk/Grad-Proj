import React from "react";
import courses from "../../DB/courses.json";
import { useState } from "react";
import "./CouForAdmin.css";
const CouForAdmin = () => {

  const [flag , setflag]=useState("ALL")
  const [FilteredCoursesflag , FilteredCoursesflagFun]=useState(courses.Courses)
  function filtered(e)
  {  
     setflag(e.target.value)
     switch(e.target.value)
     {
          case "Free":
            const Newcourses = courses.Courses.filter(course=>course.cost === "Free")
            FilteredCoursesflagFun(Newcourses)
          break;
            case ">300":
                const NewcoursesLess = courses.Courses.filter(course=>+course.cost < 300)
                 FilteredCoursesflagFun(NewcoursesLess)
                break;
             case "<=300": 
             const NewcoursesGre_Eq = courses.Courses.filter(course=>+course.cost >= 300)
                 FilteredCoursesflagFun(NewcoursesGre_Eq)
             break;
             default:
                FilteredCoursesflagFun(courses.Courses)
     }
  }

  return (
    <div>
      <div className=" container " id="btnDiv">
        <label for="Cost"> Filter on the Cost :</label>
        <select name="Cost" value={flag} id="Categories" onChange={filtered}>
          <option value="ALL">All Courses </option>
          <option  value="Free">Free</option>
          <option value=">300">Less Than 300 </option>
          <option value="<=300">Greater than or equal 300</option>
        </select>
      </div>

      <div className=" p-3 m-2" >
        <div className="row d-flex flex-row mx-auto justify-content-center">
          {FilteredCoursesflag.map(courses => (
            <div key={courses.id} className="card p-3 m-2  col-lg-3 col-m-6 col-sm-12" >
              <img src={courses.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{courses.name}</p>
                <p className="card-text">{courses.cost}</p>
                <p className="card-text">{courses.Duration}</p>
                <button type="button" class="btn btn-success mx-2">
                  Success
                </button>
                <button type="button" class="btn btn-danger mx-2">
                  Danger
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouForAdmin;

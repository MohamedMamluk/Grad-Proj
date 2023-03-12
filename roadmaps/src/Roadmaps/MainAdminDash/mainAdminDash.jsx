import React from 'react';
import { useNavigate} from 'react-router-dom';
import Loader from '../loading/loading';
import BarLoader from "../loading/SecLoading"
import Home from "../Home/home"
import "./MainAdminDash.css"
const MainAdminDash = () => {
    const navigate = useNavigate();
   function Students () { 

        navigate("/AllStudentsAdmin");
    }

    function Courses () { 

        navigate("/CoursesForAdmin");
    }

    function Instructors () { 

        navigate("/InstructorsForAdmin");
    } 

    return (
        <div className='contanier'>
           {/* <div id="btnDivv">
              <button className = "btnn" onClick={Students}>Students</button>            
           </div>
           <div id="btnDivv">
           <button className = "btnn" onClick={Instructors}>Instructors</button>
           </div>
           <div id="btnDivv">
              <button className = "btnn" onClick={Courses}>Courses</button>
           </div> */}

           {/* <Loader></Loader> */}
           {/* <BarLoader></BarLoader> */}
           <Home></Home>
        </div>
    );
}

export default MainAdminDash;

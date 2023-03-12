import React from "react";
import "./home.css";
import { useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    const navigate = useNavigate();
    function FrontRoadMap () { 

        navigate("/FrontRoadmap");
    } 

    function BackendRoadMap () { 

        navigate("/BackEndRoadMap");
    } 
    function AndroidRoadMap () { 

        navigate("/AndroidRoadMap");
    } 
    
    function IosRoadMap () { 

        navigate("/IosRoadMap");
    } 

    function DevopsRoadMap () { 

        navigate("/DevopsRoadMap");
    }
    function JavaGame () { 

        navigate("/JavaGame");
    }

  return (
    <div>
      <section className="pattern">
        <div className="geeks">
          <h4 className="Qoute">“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do 
          <img src="image/light.png" alt="light image"  className="lightImg"/>.”</h4>
        </div>
      </section>
      
      {/* <FontAwesomeIcon icon={faLightbulb} /> */}

      {/* <div className="contanier d-flex text-center">
      <div className="about">
        <p>Mindson is an E-learning website that provide that user with a great knowledge in different fields .
            our website contains many courses from different categories 
        </p>
      </div>
      <div className="about">
        <p> Main Courses's Categories</p>
        <ul>
           <li> Web Development  </li>
           <li>Mobile Development </li>
            <li>Artificial intelligence </li>
            <li>Business</li>        
            </ul>
      </div>

      
       </div> */}
       
       <div className="row">
        <h1 >Road maps </h1>
       <div className="container" id = "RoadMapDiv">
        
        <button className="w-90     mx-2 my-2" id="btnRoad" onClick={JavaGame}> Java Game Programming </button>
        <button className="w-90   mx-2 my-2" id="btnRoad" onClick={FrontRoadMap}>Front-end Development</button>
        <button className="w-90   mx-2 my-2" id="btnRoad" onClick={BackendRoadMap}>Back-end Development </button>
        <button className="w-90   mx-2 my-2" id="btnRoad" onClick={AndroidRoadMap}>Android Development</button>
        <button className="w-90    mx-2 my-2" id="btnRoad" onClick={IosRoadMap}> Ios Development </button>
        <button className="w-90    mx-2 my-2" id="btnRoad" onClick={DevopsRoadMap}> DevOps  </button>


      </div>
       </div>
       
      
     
    </div>
  );
};

export default Home;

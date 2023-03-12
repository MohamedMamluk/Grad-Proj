import React from 'react';
import "./backendroadmap.css"
const BackEndRoadMap = ({link,children}) => {
    return (
        <div className="contanier">
            <div id ="imageDiv" className='contanier col-10'>
              {children}
           </div>
        </div>
    );
}

export default BackEndRoadMap;

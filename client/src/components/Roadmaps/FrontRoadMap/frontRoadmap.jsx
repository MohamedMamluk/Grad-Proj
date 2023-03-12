import React from 'react';


const FrontRoadmap = ({link,children}) => {
    return (
        <div className='contanier' >
            <h1>header</h1>
           {/* <img src="./image/finaaaaaaaaaaaaaall.png" className="contanier " alt="..." /> */}
           <div id ="imageDiv" className='contanier col-10'>
              {children}
           </div>
          
           <h2><footer>hi</footer></h2>
        </div>
    );
}

export default FrontRoadmap;

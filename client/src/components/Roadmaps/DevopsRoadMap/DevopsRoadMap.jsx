import React from 'react';

const DevopsRoadMap = ({link,children}) => {
    return (
        <div className="contanier">
            <div id ="imageDiv" className='contanier col-10'>
              {children}
           </div>
        </div>
    );
}

export default DevopsRoadMap;

import React from 'react';

const Test = ({ testLink }) => {
  return (
    <div className='!border border-purple-500 rounded-md overflow-hidden w-max'>
      <iframe
        src={`${testLink}embedded=true`}
        width='640'
        height='548'
        frameborder='0'
        marginheight='0'
        marginwidth='0'
      >
        Loading....
      </iframe>
    </div>
  );
};

export default Test;

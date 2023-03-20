import React, { useMemo } from 'react';

const Video = ({ videoLink }) => {
  const videoCode = useMemo(() => {
    const code = videoLink.split('/');
    return code[code.length - 1].split('=')[1];
  }, [videoLink]);
  return (
    <div className='!border border-purple-500 rounded-md overflow-hidden w-max'>
      <iframe
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${videoCode}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

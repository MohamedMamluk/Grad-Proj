import React, { useEffect, useRef } from 'react';
import image from './ceer.test.jpg';
const Certificate = ({ courseName, studentName }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current && document) {
      let context = canvasRef.current.getContext('2d');

      let imgObj = new Image();
      imgObj.src = image;
      context.beginPath();
      context.drawImage(imgObj, 0, 0);
      context.font = '13pt Calibri';
      context.strokeStyle = 'white';
      context.strokeText('MindsOn ', 69, 223);
      context.strokeText(studentName, 69, 245);
      context.strokeText(courseName + ' Certificate', 165, 298);
      //   context.strokeText('QR Code', 520, 300);
      context.strokeStyle = '#7C56E1';

      context.strokeText(new Date().toLocaleDateString(), 540, 380);
      context.closePath();

      const img = canvasRef.current.toDataURL('image/jpg');
      document.getElementById('imageRef').src = img;
    }
  }, [canvasRef.current]);
  useEffect(() => {
    document.title = courseName;
  }, [courseName]);
  return (
    <div>
      <p>hint: if certificate is not showing please refresh the page</p>
      <canvas
        ref={canvasRef}
        className='hidden'
        id='canvas'
        width='700'
        height='500'
      ></canvas>
      <img
        ref={imageRef}
        className='w-[460px]'
        alt='certificate'
        id='imageRef'
      />
    </div>
  );
};

export default Certificate;

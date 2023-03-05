import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Enrolled = () => {
  const navigate = useNavigate();
  const [enrolledMessage, setEnrolledMessage] = useState('');
  useEffect(() => {
    const getEnrolled = async () => {
      const message = await axios.post(
        'http://localhost:7000/api/enrollment/confirm/',
        { courseId: '64015f9840852f37b25ce2ee' },
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmI2NjA3NjY2ODZiZGE0OTBlYTRjYSIsImlhdCI6MTY3Nzk1NDc4NywiZXhwIjoxNjc4MDQxMTg3fQ.cz57K2PSc6ZN5oAHrq-Vm8MB0BnSAuVTv_Ac2ifqEFU',
          },
        }
      );
      setEnrolledMessage(message.data);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    };
    getEnrolled();
  }, []);
  if (!enrolledMessage) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{enrolledMessage} 🎉🎉</h1>
      <p>Please wait while we redirect you...</p>
    </div>
  );
};

export default Enrolled;
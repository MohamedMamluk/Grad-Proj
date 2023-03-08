import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Enrolled = () => {
  const navigate = useNavigate();
  const [enrolledMessage, setEnrolledMessage] = useState('');
  const params2 = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const token = useSelector((store) => store.auth.token);
  useEffect(() => {
    // console.log(params2.csid);
    const getEnrolled = async () => {
      console.log(token);
      const message = await axios.post(
        '/enrollment/confirm/',
        { courseId: params2.csid },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      setEnrolledMessage(message.data);
      setTimeout(() => {
        window.location.assign(
          window.location.origin + '/dashboard/courses/' + params2.csid
        );
      }, 3000);
    };
    getEnrolled();
  }, [token]);
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

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [otp, setOTP] = useState('');
  const [status, setStatus] = useState('email');
  const sendEmail = () => {
    axios
      .post('/auth/reset', { email })
      .then((res) => {
        setStatus('otp');
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  const changePassword = () => {
    axios
      .patch(`/${user.role}/${user._id}`, { password })
      .then((res) => {
        setStatus('success');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch((err) => console.log(err));
  };
  const verifyOTP = () => {
    console.log(user);
    axios
      .get(`/${user.role}/${user._id}`)
      .then((res) => {
        if (user.resetCode == otp) {
          setStatus('password');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {status == 'email' && (
        <div>
          <h1>Enter your email...</h1>
          <div>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email...'
            />
            <button onClick={sendEmail}>Send</button>
          </div>
        </div>
      )}
      {status == 'otp' && (
        <div>
          <h1>Enter your otp...</h1>
          <div>
            <input
              type='number'
              max={9999}
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder='OTP...'
            />
            <button onClick={verifyOTP}>Send</button>
          </div>
        </div>
      )}
      {status == 'password' && (
        <div>
          <h1>Enter your new password...</h1>
          <div>
            <input
              type='string'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password...'
            />
            <button onClick={changePassword}>Send</button>
          </div>
        </div>
      )}
      {status == 'success' && (
        <div>
          <h1>CHANGED YA 3M</h1>
          <p>Please wait while we redirect you</p>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;

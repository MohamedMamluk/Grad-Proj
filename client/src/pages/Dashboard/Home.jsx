import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../features/auth/authSlice';
import { Box, Container, Typography } from '@mui/material';
const DashboardHome = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');

    axios
      .get(`http://localhost:7000/api/${user.role || role}/${user.id || id}`)
      .then((res) => {
        dispatch(setUserData(res.data.user));
        console.log(user);
      });
  }, []);
  if (!user.userData) {
    return <h1>loading...</h1>;
  }
  return (
    <Container
      className='hello-section'
      sx={{
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '10px',
      }}
    >
      <Box className='left-box'>
        <h2 className='home-welcome'>
          Greetings, {user.userData.firstName || user.userData.email}
        </h2>
        <Box>
          <h6 className='home-introduction'>
            Welcome to MindsOn! Study with us.
          </h6>
          <h6 className='home-introduction'>
            At any time and in any place, discover the unknown.
          </h6>{' '}
          <h6 className='home-introduction'>
            On the main page there are elements on time management
          </h6>
        </Box>
      </Box>
      <Box
        sx={{
          width: '35%',
          height: '200px',
        }}
        className='d-none d-md-block'
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'left',
          }}
          src='/homeImg.png'
          alt=''
        />
      </Box>
    </Container>
  );
};

export default DashboardHome;

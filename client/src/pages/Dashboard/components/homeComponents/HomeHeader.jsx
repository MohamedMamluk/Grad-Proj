import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HomeHeader = (props) => {
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
          Greetings, {props.user.userData.firstName || props.user.userData.email}
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

export default HomeHeader;
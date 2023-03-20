import React from 'react';
import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
const HomeHeader = (props) => {
  let [t, i18n] = useTranslation();
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
          {t("Greetings,")} {props.user.userData.firstName || props.user.userData.email}
        </h2>
        <Box>
          <h6 className='home-introduction'>
            {t("Welcome to Our Website! Study with us")}
          </h6>
          <h6 className='home-introduction'>
            {t("At any time and in any place, discover the unknown")}
          </h6>{' '}
          <h6 className='home-introduction'>
            {t("On the main page there are elements on time management")}
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
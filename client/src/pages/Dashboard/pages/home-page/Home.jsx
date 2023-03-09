import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../../../features/auth/authSlice';
import HomeHeader from '../../components/homeComponents/HomeHeader';
import LearningProgress from '../../components/homeComponents/LearningProgress';
import CourseProgress from '../../components/homeComponents/courseProgress';
import Grid from '@mui/material/Grid';

const DashboardHome = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');

    axios.get(`/${user.role || role}/${user.id || id}`).then((res) => {
      dispatch(setUserData(res.data.user));
    });
  }, []);
  if (!user.userData) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <HomeHeader user={user} />
      <Grid container spacing={4} padding={5}>
        <div id='progress_container'>
          <LearningProgress />
          <CourseProgress />
        </div>
      </Grid>
    </div>
  );
};

export default DashboardHome;

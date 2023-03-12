import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../../../features/auth/authSlice';
import HomeHeader from '../../components/homeComponents/HomeHeader';
import LearningProgress from '../../components/homeComponents/LearningProgress';
import CourseProgress from '../../components/homeComponents/courseProgress';
import Grid from '@mui/material/Grid';
import PieChart from '../../../../components/charts/pieChart';
import BarChart from '../../../../components/charts/barChart';
import TheTOdo from '../../components/to-do-list/TheTOdo';
import Video from '../../../../components/lessonTypes/Video';
import LineChart from '../../../../components/charts/LineChart';
// import LineChart from '../../../components/LineChart';

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
      {/* <Test
        testLink={
          'https://docs.google.com/forms/d/e/1FAIpQLSfA3e3p4wAf4ttHLwCPTZIE6Mg971GwME-OOPIQYYPiNSjlZQ/viewform?usp=sf_link'
        }
      /> */}
      {/* <Video videoLink={'https://www.youtube.com/watch?v=YGhfy3om9Ok'} /> */}
      {/* <LineChart /> */}
      <Grid container spacing={4} padding={5}>
        {/* <LineChart /> */}
        {user.userData.courses && (
          <div id='progress_container'>
            <LearningProgress />
            <CourseProgress />
          </div>
        )}
        <div>
          <PieChart />
          <BarChart />
        </div>
      </Grid>
      <div>
        <TheTOdo />
      </div>
    </div>
  );
};

export default DashboardHome;

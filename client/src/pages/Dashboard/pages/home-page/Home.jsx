import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../../../features/auth/authSlice';
import HomeHeader from '../../components/homeComponents/HomeHeader';
import { Container } from '@mui/material';
import LearningProgress from '../../components/homeComponents/LearningProgress';
import CourseProgress from '../../components/homeComponents/courseProgress';
import Grid from '@mui/material/Grid';
import PieChart from '../../../../components/charts/pieChart';
import BarChart from '../../../../components/charts/barChart';
import TheTOdo from '../../components/to-do-list/TheTOdo';
// import LineChart from '../../../components/LineChart';

const DashboardHome = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');
    console.log(id, role);

    axios.get(`/${user.role || role}/${user.id || id}`).then((res) => {
      console.log(res.data);
      dispatch(setUserData(res.data.user));
      //console.log(user);
    });
  }, []);
  if (!user.userData) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <HomeHeader user={user} />
      <Grid container spacing={4} padding={5}>
        {/* <LineChart /> */}
        <div id='progress_container'>
          <LearningProgress />
          <CourseProgress />
        </div>
      <div>
        <PieChart/>
        <BarChart/>
      </div>
      </Grid>
        <div>
          <TheTOdo/>
        </div>
    </div>
  );
};

export default DashboardHome;

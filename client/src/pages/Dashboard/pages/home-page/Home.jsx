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
import Loader from '../../../../components/loading/loading';

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
    return (<div style={{position: 'absolute', left: '10%', top: '50%'}}>
    <Loader/>
    </div>);
  }
  return (
    <div>
      <HomeHeader user={user} />
      <Grid container spacing={4} padding={5}>
        {user.role == 'instructor' && <LineChart />}

        {user.role == 'student' && (

          <div id='progress_container'>
            <LearningProgress />
            <CourseProgress />
          </div>
        )}
        {user.role == 'admin' && (
          <div>
            <PieChart />
            <BarChart />
          </div>
        )}
      </Grid>
      <div>
        <TheTOdo />
      </div>
    </div>
  );
};

export default DashboardHome;

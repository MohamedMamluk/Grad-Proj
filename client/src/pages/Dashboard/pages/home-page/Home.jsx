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
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    return (
      <div style={{ position: 'absolute', left: '10%', top: '50%' }}>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <motion.div
        id='home_header_container'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
      >
        <HomeHeader user={user} />
      </motion.div>
      <Grid container spacing={4} padding={5}>
        {user.role == 'instructor' && user.userData.balance.length > 0 && (
          <motion.div
            id='line_balance_container'
            style={{ width: '50vw' }}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
          >
            <LineChart />
          </motion.div>
        )}
        {user.role == 'student' && user.userData.courses.length > 0 && (
          <motion.div
            id='progress_container'
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
          >
            <LearningProgress />
            <CourseProgress />
          </motion.div>
        )}
        {user.role == 'admin' && (
          <div className='flex w-full my-12'>
            <PieChart />
            <BarChart />
          </div>
        )}
      </Grid>
      <motion.div
        id='progress_container'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 3, bounce: 0.3 }}
      >
        <TheTOdo />
      </motion.div>
    </div>
  );
};

export default DashboardHome;

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
import { motion, AnimatePresence, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DashboardHome = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {ref , inView} = useInView({
    threshold:0.1
    //that means 10 of the paent div should be visible before it sets the boolean inView to true
  });
  const animation =useAnimation();

  useEffect(() => {
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');

    axios.get(`/${user.role || role}/${user.id || id}`).then((res) => {
      dispatch(setUserData(res.data.user));
    });
  }, []);

  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:'spring',duration:1, bounce:0.3
        }
      });
    }
    if(!inView){
      animation.start({x:'-100vw'})
    }
  },[inView]);

  if (!user.userData) {
    return (<div style={{position: 'absolute', left: '10%', top: '50%'}}>
    <Loader/>
    </div>);
  }

  return (
    <div>
      <HomeHeader user={user} />
      <Grid ref={ref} container spacing={4} padding={5}>
        {user.role == 'instructor' && user.userData.balance.length > 0 && (
          <motion.div id='balance_container'
          animate={{animation}}
          >
            <LineChart />
            </motion.div>
        )}

        {user.role == 'student' && (
          <motion.div id='progress_container'
          animate={{animation}}
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
      animate={{animation}}
          >
        <TheTOdo />
      </motion.div>
    </div>
  );
};

export default DashboardHome;

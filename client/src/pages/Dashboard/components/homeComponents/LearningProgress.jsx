import React from 'react';
import { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import {useSelector} from 'react-redux'
import { useTranslation } from 'react-i18next';
function LinearProgressWithLabel(props) {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
        
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const LearningProgress = (props) => {
  let [t, i18n] = useTranslation();
  const user = useSelector((store)=>{
    return store.auth;
  })
  const lessonsCompletedTrue=(data)=>{
    let lessonaya =0;
    const redusedData =data.reduce((pre,current)=>{
      current.lessons.map((lesson)=>{
        lessonaya++;
        if(lesson.isFinished){
          return pre++;
        }
      })
      return pre;
    },0)
    return {redusedData,lessonaya};
  }
  const coursesCompletedTrue=(data)=>{
    const redusedData =data.reduce((pre,current)=>{
      let courseComplete=true;
      current.lessons.map((lesson)=>{
        if(!lesson.isFinished){
          courseComplete=false;
          // console.log("inside loop",courseComplete);
        }

      })
      let ret = courseComplete ? ++pre : pre;
      return ret;
    },0)
    return redusedData;
  }
  const [lessonsCompleted, setlessonsCompleted] = useState(0);
  const [coursesCompleted, setcoursesCompleted] = useState(0);
  useEffect(()=>{
    axios.get(`/lessonsFinished/std/${user.userData._id}`)
    .then((res)=>{
      const lesson= lessonsCompletedTrue(res.data);
      setlessonsCompleted((lesson.redusedData/lesson.lessonaya)*100);
      const course= coursesCompletedTrue(res.data);
      setcoursesCompleted((course/res.data.length)*100);
    })
  },[lessonsCompleted])
  return (
    <Container
      className='hello-section hello-section-progress'
      sx={{
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
      }}
    >
      <Box className='left-box' sx={{ width: '100%' }}>
        <h6 className='home-welcome' style={{ fontSize: '1.5vw' }}>
          {t("Learning progress")}
        </h6>
        {/* <Box sx={{ width: '98%' }}>
          <span style={{ fontSize: '80%' }}>
            Completed homework assignments
          </span>
          <LinearProgressWithLabel value={progress} />
        </Box> */}
        <Box sx={{ width: '98%' }}>
          <span style={{ fontSize: '80%' }}>{t("Viewed lessons")}</span>
          <LinearProgressWithLabel value={lessonsCompleted} />
        </Box>
        <Box sx={{ width: '98%' }}>
          <span style={{ fontSize: '80%' }}>{t("Courses completed")}</span>
          <LinearProgressWithLabel value={coursesCompleted} />
        </Box>
      </Box>
    </Container>
  );
};

export default LearningProgress;
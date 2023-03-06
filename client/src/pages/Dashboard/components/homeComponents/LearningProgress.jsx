//rsc

import React from 'react';
// import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Box, Container} from '@mui/material';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
const LearningProgress = (props) => {
    const [progress, setProgress] = React.useState(10);

    return (
        <Container
      className='hello-section'
      sx={{
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        width: '40%' 
      }}
    >
        <Box className='left-box' sx={{ width: '100%' }}>
        <h6 className='home-welcome' style={{ fontSize: '1.5vw' }}>
          Learning progress
        </h6>
        <Box sx={{ width: '98%' }}>
            <span style={{ fontSize: '80%' }}>
                Completed homework assignments
            </span>
          <LinearProgressWithLabel value={progress} />
        </Box>
        <Box sx={{ width: '98%' }}>
            <span style={{ fontSize: '80%' }}>
                Viewed lessons
            </span>
          <LinearProgressWithLabel value={progress} />
        </Box>
        <Box sx={{ width: '98%' }}>
            <span style={{ fontSize: '80%' }}>
                Courses completed
            </span>
          <LinearProgressWithLabel value={progress} />
        </Box>
        </Box>
        </Container>
      );
};

export default LearningProgress;
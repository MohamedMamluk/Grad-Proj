import { Button, Grid } from '@mui/material';
import React from 'react';

const FullSizeButton = ({ buttonLabel, onClick }) => {
  return (
    <Grid item xs={12}>
      <Button
        onClick={onClick}
        fullWidth
        variant='contained'
        style={{ backgroundColor: '#3f51b5' }}
        sx={{
          mt: 3,
          mb: 2,
        }}
      >
        {buttonLabel}
      </Button>
    </Grid>
  );
};

export default FullSizeButton;

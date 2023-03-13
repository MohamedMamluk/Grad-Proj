import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddingNewCourseForm({
  courseTitle,
  courseDuration,
  paid,
  isPaied,
  img,
  setNewCourse,
}) {
  const handleChange = (event) => {
    setNewCourse((prev) => {
      return { ...prev, paid: event.target.value };
    });
  };
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState('');
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'vqsktgr7');
    setUploading(true);
    axios
      .post('https://api.cloudinary.com/v1_1/dsra1ldsf/image/upload', formData)
      .then((res) => {
        setUploading(false);
        // //console.log(res.data);
        setUploaded(res.data.public_id);
        setNewCourse((prev) => ({ ...prev, img: res.data.secure_url }));
      });
  };
  return (
    <React.Fragment>
      <Grid sx={{ mt: 3 }}>
        <Typography variant='h6' gutterBottom>
          Adding New Course
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='courseTitle'
              name='courseTitle'
              label='Course title'
              value={courseTitle}
              onChange={(e) => {
                setNewCourse((pre) => {
                  return { ...pre, courseTitle: e.target.value };
                });
              }}
              fullWidth
              autoComplete='given-name'
              variant='standard'
            />
            {!courseTitle && (
              <label style={{ color: '#ff0000' }}>
                Course title is required!
              </label>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='courseDuration'
              value={courseDuration}
              name='courseDuration'
              label='Please enter course duration'
              fullWidth
              variant='standard'
              onChange={(e) => {
                setNewCourse((pre) => {
                  return { ...pre, courseDuration: e.target.value };
                });
              }}
            />
            {!courseDuration && (
              <label style={{ color: '#ff0000' }}>
                Course duration is required!
              </label>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' gutterBottom textAlign='center'>
              Uplode course picture
            </Typography>
            <Grid display='flex' justifyContent='center' alignItems='center'>
              <Stack direction='row' alignItems='center' spacing={2}>
                <Button
                  variant='contained'
                  component='label'
                  disabled={uploading || uploaded.length > 0}
                  sx={{
                    backgroundColor:
                      uploading || uploaded.length > 0 ? 'gray' : '#3f51b5',
                    color: uploading || uploaded.length > 0 ? 'red' : 'white',
                  }}
                >
                  {uploading && 'Uploading...'}
                  {uploaded.length > 0 ? 'Uploaded ✔' : 'Upload'}
                  <input
                    hidden
                    accept='image/*'
                    multiple
                    onChange={handleFileChange}
                    type='file'
                  />
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Grid item xs={12} textAlign='center'>
            <FormControl>
              <Typography variant='h6' gutterBottom>
                Course is paied?
              </Typography>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                row={true}
                name='controlled-radio-buttons-group'
                value={paid}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='free'
                  control={
                    <Radio
                      sx={{
                        color: '#3f51b5',
                        '&.Mui-checked': {
                          color: '#3f51b5',
                        },
                      }}
                    />
                  }
                  label='Free'
                />
                <FormControlLabel
                  value='paid'
                  control={
                    <Radio
                      sx={{
                        color: '#3f51b5',
                        '&.Mui-checked': {
                          color: '#3f51b5',
                        },
                      }}
                    />
                  }
                  label='Is Paid'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {paid == 'paid' && (
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='isPaied'
                label='Enter your payment'
                type='isPaied'
                variant='standard'
                value={isPaied}
                onChange={(e) => {
                  setNewCourse((prev) => {
                    return { ...prev, isPaied: e.target.value };
                  });
                }}
                id='isPaied'
                autoComplete='isPaied'
              />
              {!isPaied && (
                <label style={{ color: '#ff0000' }}>Payment is required!</label>
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

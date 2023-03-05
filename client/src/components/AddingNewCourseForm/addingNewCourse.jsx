import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function AddingNewCourseForm() {

    const authSelector = useSelector((state) => state.auth.token);
    // const navigate = useNavigate();
    const [data, setData] = React.useState({
        courseTitle: '',
        courseDuration: '',
        paid: '',
        isPaied:'',
        img:'', //to be handeled
      });
      

    const handleChange = (event) => {
        setData((prev) => {
          return { ...prev, paid: event.target.value };
        });
      };

    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios
    //       .post('', data)
    //       .then((res) => {
    //         navigate('');
    //         console.log(res.data);
    //       })
    //       .catch((err) => console.log(err));
    //   };
  return (
    <React.Fragment>
        <Box
              component='form'
              noValidate
            //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
      <Typography variant="h6" gutterBottom>
        Adding New Course
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseTitle"
            name="courseTitle"
            label="Course title"
            value={data.courseTitle}
            onChange={(e)=>{setData((pre)=>{
              return {...pre , courseTitle:e.target.value}
            })}}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
          {!data.courseTitle && <label
          style={{color:'#ff0000'}}
        >
          Course title is required!
          </label>
        }
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseDuration"
            value={data.courseDuration}
            name="courseDuration"
            label="Please enter course duration"
            fullWidth
            variant="standard"
            onChange={(e)=>{setData((pre)=>{
              return {...pre , courseDuration:e.target.value}
            })}}
          />
          {!data.courseDuration && <label
          style={{color:'#ff0000'}}
        >
          Course duration is required!
          </label>
        }
        </Grid>
        <Grid item xs={12} >
          <Typography variant="h6" gutterBottom textAlign="center">
          Uplode course picture
      </Typography>
      <Grid display="flex" justifyContent="center" alignItems="center">

        <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" style={{ backgroundColor: '#3f51b5' }}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
      </Grid>
        </Grid>
    
        <Grid item xs={12} textAlign="center">
                  <FormControl>
                  <Typography variant="h6" gutterBottom>
        Course is paied?
      </Typography>
                    <RadioGroup
                      aria-labelledby='demo-controlled-radio-buttons-group'
                      row={true}
                      name='controlled-radio-buttons-group'
                      value={data.paid}
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
                        label='Is Paid '
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {data.paid == 'paid' && (
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name='isPaied'
                      label='Enter your payment'
                      type='isPaied'
                      variant="standard"
                      value={data.isPaied}
                      onChange={(e) => {
                        setData((prev) => {
                          return { ...prev, isPaied: e.target.value };
                        });
                      }}
                      id='isPaied'
                      autoComplete='isPaied'
                    />
                    {!data.isPaied && <label
          style={{color:'#ff0000'}}
        >
          Payment is required!
          </label>
        }
                  </Grid>
                )}
                {/* <Grid item xs={3}>
                <Button
                type='submit'
                fullWidth
                variant='contained'
                style={{ backgroundColor: '#3f51b5' }}
                sx={{
                    mt: 3,
                    mb: 2,
                }}
                >
                Submit
              </Button>
                  </Grid> */}
      </Grid>
      </Box>
    </React.Fragment>
  );
}
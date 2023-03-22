import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { purple } from '@mui/material/colors';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { setUser, logout } from '../features/auth/authSlice';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      MindsOn {new Date().getFullYear()}
      {'.'}{' '}
    </Typography>
  );
}

const theme = createTheme({});

export default function Register() {
  let [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: '',
    password: '',
    role: '',
    phone: '',
    firstName: '',
    lastName: '',
    levelOfExperience: '',
  });
  const [disableButton , setDisableButton] = useState(false)
  React.useEffect(() => {
    if (authSelector != null) {
      navigate('/dashboard');
    }
  }, []);
  const handleChange = (event) => {
    setData((prev) => {
      return { ...prev, role: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    setDisableButton(true);
    event.preventDefault();
    axios.post('/auth/register', data).then(() => {

      setDisableButton(false);
      toast('Successfully Signed up');
      navigate('/login');
      
      //console.log(res.data);

    }).catch((err)=>{
      toast.error('Wrong Input');
      setDisableButton(false);
    });
  };
  var emaill = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  return (

    <ThemeProvider theme={theme}>
      <ToastContainer></ToastContainer>
      <motion.div
        key={'MM'}
        animate={{
          transition: 'ease-in',
          x: 0,
          opacity: 1,
        }}
        initial={{
          transition: 'ease-out',
          opacity: 0,
          x: -100,
        }}
        transition={{
          // type:"spring",
          // stiffness:60,
          // damping:100,
          duration: 2,
          // transition:"ease-in"
        }}
      >
        <CssBaseline />
        <Grid container component='main' sx={{ height: '90vh' }}>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            padding={2}
            square
          >
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                {t("Sign up")}
              </Typography>
              <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  {/* //first name  */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete='given-name'
                      name='firstName'
                      required
                      fullWidth
                      id='firstName'
                      value={data.firstName}
                      onChange={(e) => {
                        setData((prev) => {
                          return { ...prev, firstName: e.target.value };
                        });
                      }}
                      // sx={
                      //   {"&:focus":{borderColor:'10px solid #3f51b5',
                      // labelColor:'#3f51b5'}
                      //   }
                      // }
                      label={t("First Name")}
                      autoFocus
                    />
                    {!data.firstName && (
                      <div style={{ color: 'red' }}>
                        {t("First Name must be provided")}
                      </div>
                    )}
                  </Grid>
                  {/* last name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id='lastName'
                      label={t("Last Name")}
                      name='lastName'
                      value={data.lastName}
                      onChange={(e) => {
                        setData((prev) => {
                          return { ...prev, lastName: e.target.value };
                        });
                      }}
                      autoComplete='family-name'
                    />
                    {!data.lastName && (
                      <div style={{ color: 'red' }}>
                        {t("Last Name must be provided")}
                      </div>
                    )}
                  </Grid>
                  {/* email */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id='email'
                      type='email'
                      label={t("Email Address")}
                      name='email'
                      value={data.email}
                      onChange={(e) => {
                        setData((prev) => {
                          return { ...prev, email: e.target.value };
                        });
                      }}
                      autoComplete='email'
                    />
                    {!emaill.test(data.email) && (
                      <div style={{ color: 'red' }}>{t("Enter a valid email")}</div>
                    )}
                  </Grid>
                  {/* password */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name='password'
                      type='password'
                      label={t("Password")}
                      id='password'
                      value={data.password}
                      onChange={(e) => {
                        setData((prev) => {
                          return { ...prev, password: e.target.value };
                        });
                      }}
                      autoComplete='new-password'
                    />
                    {!data.password.match(passw) && (
                      <div style={{ color: 'red' }}>
                        {t("Enter a stronger password")}
                      </div>
                    )}
                  </Grid>
                  {/* phone number */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name='phoneNumber'
                      value={data.phone}
                      onChange={(e) => {
                        setData((prev) => {
                          return { ...prev, phone: e.target.value };
                        });
                      }}
                      label={t("Phone Number")}
                      type='phoneNumber'
                      id='phoneNumber'
                      autoComplete='phoneNumber'
                    />
                    {data.phone.length < 11 && (
                      <div style={{ color: 'red' }}>{t("Enter a valid phone number")}</div>
                    )}
                  </Grid>
                  {/* Role => student || instructor */}
                  <Grid item xs={12}>
                    <FormControl>
                      {/* <FormLabel id='demo-controlled-radio-buttons-group'>
                        Gender
                      </FormLabel> */}
                      <RadioGroup
                        aria-labelledby='demo-controlled-radio-buttons-group'
                        row={true}
                        name='controlled-radio-buttons-group'
                        value={data.role}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value='student'
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
                          label={t("Student")}
                        />
                        <FormControlLabel
                          value='instructor'
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
                          label={t("Instructor")}
                        />
                      </RadioGroup>
                    </FormControl>
                    {!data.role && (
                      <div style={{ color: 'red' }}>{t("choose your role")}</div>
                    )}
                  </Grid>

                  {/* level of experience accourding to instructor role */}
                  {data.role == 'instructor' && (
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name='levelOfExperience'
                        label={t("Level Of Experience")}
                        type='levelOfExperience'
                        value={data.levelOfExperience}
                        onChange={(e) => {
                          setData((prev) => {
                            return {
                              ...prev,
                              levelOfExperience: e.target.value,
                            };
                          });
                        }}
                        id='levelOfExperience'
                        autoComplete='levelOfExperience'
                      />
                    </Grid>
                  )}
                </Grid>
                {/* submit button */}
                <Button
                  type='submit'
                  disabled={disableButton}
                  fullWidth
                  variant='contained'
                  style={{ backgroundColor: '#3f51b5' }}
                  sx={{
                    mt: 3,
                    mb: 2,
                  }}
                >
                  {t("Sign up")}
                </Button>
                {/* already have an account? ==> sign in */}
                <Grid container justifyContent='flex-end'>
                  <Grid item>
                    <Link to='/login' variant='body2'>
                      {t("Already have an account? Sign in")}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          {/* register picture */}
          <Grid
            item
            // style={{ maxWidth: '75%' }}
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(/registerPic-removebg.png)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </motion.div>
    </ThemeProvider>
  );
}

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { setUser, logout, setUserData } from '../features/auth/authSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      {'.'}
    </Typography>
  );
}

const theme = createTheme({});

export default function SignIn() {
  let [t, i18n] = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [disableButton , setDisableButton] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [data, setData] = React.useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  React.useEffect(() => {
    if (authSelector != null) {
      const redirect = location.state?.from?.pathname || '/dashboard';
      navigate(redirect, { replace: true });

      // navigate('/dashboard');
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableButton(true);
    axios.post('/auth/login', data)
    .then((res) => {
      dispatch(setUser(res.data));
      const id = localStorage.getItem('id');
      const role = localStorage.getItem('role');
      axios
        .get(`/${res.data.role || role}/${res.data.id || id}`)
        .then((res) => {
          // console.log('IN THEN');
          if(res.status == 401){
            navigate('/confirm-mail')
          }
          dispatch(setUserData(res.data.user));
          //console.log(user);
        }).catch(error=>{
          // console.log('IN CATCH')
           if(res.status == 401){
            navigate('/confirm-mail')
          }
        });
      if (data.rememberMe) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('role', res.data.role);
      }
      const redirect = location.state?.from?.pathname || '/dashboard';
      toast('Successfully Logged in');
      setDisableButton(false);
      
      navigate(redirect, { replace: true });
    }).catch(error=>{
      setDisableButton(false);
      // console.log(error.response.status)
      // console.log("error kbeeera ", error);
      toast.error('Wrong Email or Password',{position: "bottom-left"});
           if(error.response.status == 401){
            navigate('/confirm-mail')
          }
        });;
  };
  return (
    <ThemeProvider theme={theme}>
      {/* <AnimatePresence exitBeforeEnter> */}
      <motion.div
        key={'MM'}
        animate={{
          transition: 'ease-in',
          x: 0,
          opacity: 1,
          overflow: 'hidden',
        }}
        initial={{
          transition: 'ease-out',
          opacity: 0,
          x: 50,
          overflow: 'hidden',
        }}
        transition={{
          // type:"spring",
          // stiffness:60,
          // damping:100,
          duration: 3,
          // transition:"ease-in"
        }}
      >
        <Grid container component='main' sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
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
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Sign in
              </Typography>
              <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  variant='standard'
                  margin='normal'
                  required
                  fullWidth
                  type='email'
                  id='email'
                  value={data.email}
                  onChange={(e) => {
                    setData((prev) => {
                      return { ...prev, email: e.target.value };
                    });
                  }}
                  label={t("Email Address")}
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                {data.email.length < 5 && (
                  <div style={{ color: 'red' }}>{t("Enter a valid email")}</div>
                )}

                <FormControl
                  sx={{ m: 1, width: '100%' }}
                  variant='outlined'
                  value={data.password}
                  required
                  onChange={(e) => {
                    setData((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                >
                  <InputLabel htmlFor='standard-adornment-password'>
                  {t("Password")}
                  </InputLabel>
                  <Input
                    sx={{ width: '100%' }}
                    id='standard-adornment-password'
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                {/* <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }

                  value={data.password}
                  onChange={(e) => {
                    setData((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                  autoComplete='current-password'
                /> */}
                {data.password.length < 6 && (
                  <div style={{ color: 'red' }}>{t("Enter a valid password")}</div>
                )}
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label={t("Remember me")}
                  value={data.rememberMe}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      rememberMe: e.target.checked,
                    }))
                  }
                />
                <Button
                  disabled={disableButton}
                  type='submit'
                  fullWidth
                  variant='contained'
                  style={{ backgroundColor: '#3f51b5' }}
                  sx={{ mt: 3, mb: 2 }}
                >
                  {t("Sign In")}
                </Button>
                <Link
                  to='/reset'
                  variant='body2'
                  // onClick={() => nagigateToOtp()}
                  // className='text-gray-800'
                >
                  {t("Forgot password?")}
                </Link>
                <Grid container>
                  <Grid item>
                    <Link to='/register' variant='body2'>
                      {t("Don't have an account? Sign Up")}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <ToastContainer />
      </motion.div>
      {/* </AnimatePresence> */}
    </ThemeProvider>
  );
}

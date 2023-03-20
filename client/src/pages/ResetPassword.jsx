import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';

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

const theme = createTheme();

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState({});
  const [OTPinput, setOTP] = useState('');
  const [status, setStatus] = useState('email');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const sendEmail = () => {
    axios
      .post('/auth/reset', { email })
      .then((res) => {
        setStatus('otp');
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  const changePassword = () => {
    axios
      .patch(`/${user.role}/${user._id}`, { password })
      .then((res) => {
        setStatus('success');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((err) => console.log(err));
  };
  const verifyOTP = () => {
    console.log(user);
    axios
      .get(`/${user.role}/${user._id}`)
      .then((res) => {
        if (user.resetCode == OTPinput) {
          setStatus('password');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=''>
      {status == 'email' && (
        <div>
          {/* <div>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email...'
            />
            <button onClick={sendEmail}>Send</button>
          </div> */}
          <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h1>Enter your email...</h1>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  value={email}
                  sx={{ color: 'white !important' }}
                  onChange={(e) => setEmail(e.target.value)}
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                <Button
                  type='submit'
                  fullWidth
                  onClick={sendEmail}
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </ThemeProvider>
        </div>
      )}
      {status == 'otp' && (
        <div>
          {/* <div>
          <h1>Enter your otp...</h1>
            <input
              type='number'
              max={9999}
              value={OTPinput}
              onChange={(e) => setOTP(e.target.value)}
              placeholder='OTP...'
            />
            <button onClick={verifyOTP}>Send</button>
          </div> */}
          <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h5>
                  Enter your verification code that we send you, please check
                  your email...
                </h5>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  value={OTPinput}
                  onChange={(e) => setOTP(e.target.value)}
                  id='OTP'
                  label='verification code'
                  name='OTP'
                  autoComplete='OTP'
                  autoFocus
                />
                <Button
                  type='submit'
                  fullWidth
                  onClick={verifyOTP}
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Code.
                </Button>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </ThemeProvider>
          {/* <OTPresetPassword /> */}
        </div>
      )}
      {status == 'password' && (
        <div>
          {/* <h1>Enter your new password...</h1>
          <div>
            <input
              type='string'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password...'
            />
            <button onClick={changePassword}>Send</button>
          </div> */}
          <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h5>Enter your new Password</h5>
                <FormControl
                  sx={{ m: 1, width: '100%' }}
                  variant='outlined'
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <InputLabel htmlFor='standard-adornment-password'>
                    Password
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
                <FormControl
                  sx={{ m: 1, width: '100%' }}
                  variant='outlined'
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                >
                  <InputLabel htmlFor='standard-adornment-password'>
                    Confirm Password
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
                {password !== confirmPassword && (
                  <div style={{ color: 'red' }}>not matching password....</div>
                )}
                <Button
                  type='submit'
                  fullWidth
                  onClick={changePassword}
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Change Password...
                </Button>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </ThemeProvider>
        </div>
      )}
      {status == 'success' && (
        <div>
          <h1>CHANGED YA 3M</h1>
          <p>Please wait while we redirect you</p>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;

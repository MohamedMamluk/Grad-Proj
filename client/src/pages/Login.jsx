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
import { setUser, logout } from '../features/auth/authSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' to='/'>
        MindsOn{' '}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({});

export default function SignIn() {
  const location = useLocation();
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  React.useEffect(() => {
    if (authSelector != null) {
      navigate('/dashboard');
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post('/auth/login', data)
    .then((res) => {
      //console.log(res.data);
      dispatch(setUser(res.data));
      if (data.rememberMe) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('role', res.data.role);
      }
      const redirect = location.state?.from?.pathname || '/dashboard';
      navigate(redirect, { replace: true });
    });
  };

  return (
    <ThemeProvider theme={theme}>
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                value={data.email}
                onChange={(e) => {
                  setData((prev) => {
                    return { ...prev, email: e.target.value };
                  });
                }}
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={data.password}
                onChange={(e) => {
                  setData((prev) => {
                    return { ...prev, password: e.target.value };
                  });
                }}
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
                value={data.rememberMe}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, rememberMe: e.target.checked }))
                }
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                style={{ backgroundColor: '#3f51b5' }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to='/register' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

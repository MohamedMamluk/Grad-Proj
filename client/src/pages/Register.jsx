import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';
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
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {setUser, logout} from '../features/auth/authSlice';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

function Copyright(props) {
    return (
        <Typography variant='body2' color='text.secondary' align='center' {...props}>
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
                MindsOn{' '} </Link>
            {' '}
            {
            new Date().getFullYear()
        }
            {'.'} </Typography>
    );
}

const theme = createTheme({});

export default function Register() {
    const dispatch = useDispatch();
    const authSelector = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const [data, setData] = React.useState({email: '', password: '',role:"",phone:"",firstName:"",lastName:"",levelOfExperience:""});
    React.useEffect(() => {
        if (authSelector != null) {
            navigate('/dashboard');
        }
    }, []);
    const handleChange = (event) => {
      setData((prev)=>{
        return {...prev,role:event.target.value}
      });
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:7000/api/auth/register', data).then((res) => {
            navigate('/login');
            console.log(res.data)
        }).catch((err) => console.log(err));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container component='main'
                sx={
                    {height: '90vh'}
            }>
                <CssBaseline/>

                <Grid item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    padding ={2}
                    square>
                    <Box sx={
                        {
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }
                    }>
                        <Avatar sx={
                            {
                                m: 1,
                                bgcolor: 'secondary.main'
                            }
                        }>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate
                            onSubmit={handleSubmit}
                            sx={
                                {mt: 3}
                        }>
                            <Grid container
                                spacing={2}>
                        {/* //first name  */}
                                <Grid item
                                    xs={12}
                                    sm={6}>
                                    <TextField autoComplete="given-name" 
                                    name="firstName" 
                                    required 
                                    fullWidth 
                                    id="firstName" 
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
                                    label="First Name" 
                                    autoFocus/>
                                </Grid>
                        {/* last name */}
                                <Grid item
                                    xs={12}
                                    sm={6}>
                                    <TextField required 
                                    fullWidth 
                                    id="lastName" 
                                    label="Last Name" 
                                    name="lastName" 
                                    value={data.lastName}
                                    onChange={(e) => {
                                      setData((prev) => {
                                        return { ...prev, lastName: e.target.value };
                                      });
                                    }}
                                    autoComplete="family-name"/>
                                </Grid>
                                {/* email */}
                                <Grid item
                                    xs={12}>
                                    <TextField required 
                                    fullWidth id="email" 
                                    label="Email Address" 
                                    name="email"
                                    value={data.email} 
                                    onChange={(e) => {
                                      setData((prev) => {
                                        return { ...prev, email: e.target.value };
                                      });
                                    }}
                                    autoComplete="email"/>
                                </Grid>
                                {/* password */}
                                <Grid item
                                    xs={12}>
                                    <TextField required 
                                    fullWidth name="password" 
                                    label="Password" 
                                    type="password" 
                                    id="password" 
                                    value={data.password}
                                    onChange={(e) => {
                                      setData((prev) => {
                                        return { ...prev, password: e.target.value };
                                      });
                                    }}
                                    autoComplete="new-password"/>
                                </Grid>
                                {/* phone number */}
                                <Grid item
                                    xs={12}>
                                    <TextField required 
                                    fullWidth 
                                    name="phoneNumber"
                                    value={data.phone} 
                                    onChange={(e) => {
                                      setData((prev) => {
                                        return { ...prev, phone: e.target.value };
                                      });
                                    }}
                                    label="Phone Number" 
                                    type="phoneNumber" 
                                    id="phoneNumber" 
                                    autoComplete="phoneNumber"/>
                                </Grid>
                                {/* Role => student || instructor */}
                                <Grid item
                                    xs={12}>
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        row={true}
        name="controlled-radio-buttons-group"
        value={data.role}
        onChange={handleChange}
      >
        <FormControlLabel 
        value="student" 
        control={<Radio sx={{
          color: '#3f51b5',
          '&.Mui-checked': {
            color: '#3f51b5',
          },
        }} />} 
        label="Studnet" />
        <FormControlLabel value="instructor"
         control={
         <Radio sx={{
          color: '#3f51b5',
          '&.Mui-checked': {
            color: '#3f51b5',
          },
        }} />
        } 
         label="Instructor" />
      </RadioGroup>
    </FormControl>
                                  </Grid>
                                  {/* level of experience accourding to instructor role */}
                                  {data.role=="instructor"&&<Grid item
                                    xs={12}>
                                    <TextField required 
                                    fullWidth 
                                    name="levelOfExperience" 
                                    label="Level Of Experience" 
                                    type="levelOfExperience"
                                    value={data.levelOfExperience}
                                    onChange={(e) => {
                                      setData((prev) => {
                                        return { ...prev, levelOfExperience: e.target.value };
                                      });
                                    }} 
                                    id="levelOfExperience" 
                                    autoComplete="levelOfExperience"/>
                                </Grid>}
                            </Grid>
                            {/* submit button */}
                            <Button 
                            type="submit" 
                            fullWidth variant="contained"
                            style={{ backgroundColor: '#3f51b5' }}
                            
                                sx={
                                    {
                                        mt: 3,
                                        mb: 2
                                    }
                            }>
                                Sign Up
                            </Button>
                            {/* already have an account? ==> sign in */}
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to='/login' variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                {/* register picture */}
                <Grid item
                    // style={{ maxWidth: '75%' }}
                    xs={false}
                    sm={4}
                    md={7}
                    sx={
                        {
                            backgroundImage: 'url(/registerPic-removebg.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }
                    }/>
            </Grid>
            <Copyright sx={
                {mt: 5}
            }/>
        </ThemeProvider>
    );
};

import React from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { MainListItems } from './listItems';
import { ListItemIcon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Breadcrumb from './breadcrumb/Breadcrumb';
import axios from 'axios';
import { setUserData } from '../../../features/auth/authSlice';
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

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');
    console.log('Fetched user data');
    axios.get(`/${user.role || role}/${user.id || id}`).then((res) => {
      dispatch(setUserData(res.data.user));
    });
  }, []);

  const user = useSelector((store) => store.auth);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', color: 'black' }}>
        <CssBaseline />
        <AppBar
          position='absolute'
          style={{ backgroundColor: '#6d54de' }}
          open={open}
        >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Breadcrumb />
            {user.userData?.image && (
              <IconButton color='inherit'>
                <ListItemIcon>
                  <Link to={'/dashboard/profile'}>
                    <img
                      src={user.userData.image}
                      style={{
                        borderRadius: '50%',
                        border: 'solid 2px white',
                        width: '30px',
                        height: '30px',
                      }}
                    />
                  </Link>
                </ListItemIcon>
              </IconButton>
            )}
            {!user.userData?.image && (
              <IconButton color='inherit'>
                <ListItemIcon>
                  <Link to={'/dashboard/profile'}>
                    <AccountCircleIcon
                      style={{ fill: 'white' }}
                      fontSize='large'
                    />
                  </Link>
                </ListItemIcon>
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component='nav'>
            {/* {mainListItems} */}
            <MainListItems />
            {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
            <Outlet />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Layout() {
  return <DashboardContent />;
}

// <div>
//   Layout
//   <Outlet />
// </div>

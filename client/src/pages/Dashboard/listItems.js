import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

export const MainListItems = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Link
        to='/dashboard'
        style={{ textDecoration: 'none', color: 'GrayText' }}
      >
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon style={{ fill: '#6d54de' }} fontSize='large' />
          </ListItemIcon>
          <ListItemText primary='Main' />
        </ListItemButton>
      </Link>
      <Link
        to='/dashboard/explore'
        style={{ textDecoration: 'none', color: 'GrayText' }}
      >
        <ListItemButton>
          <ListItemIcon>
            <ExploreIcon
              style={{ fill: '#6d54de', textAlign: 'center' }}
              fontSize='large'
            />
          </ListItemIcon>
          <ListItemText primary='Explore' />
        </ListItemButton>
      </Link>
      <Link
        to='/dashboard/profile'
        style={{ textDecoration: 'none', color: 'GrayText' }}
      >
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon style={{ fill: '#6d54de' }} fontSize='large' />
          </ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItemButton>
      </Link>
      <Link
        to='/'
        onClick={() => dispatch(logout())}
        style={{ textDecoration: 'none', color: 'GrayText' }}
      >
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon style={{ fill: '#6d54de' }} fontSize='large' />
          </ListItemIcon>
          <ListItemText primary='Sign Out' />
        </ListItemButton>
      </Link>
      {/* <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary='Integrations' />
    </ListItemButton> */}
    </React.Fragment>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Current month' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItemButton>
  </React.Fragment>
);

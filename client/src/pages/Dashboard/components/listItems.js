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
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, getAuth } from '../../../features/auth/authSlice';

export const MainListItems = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);
  console.log(auth);
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
      {(auth.role == 'admin' || auth.role == 'instructor') && (
        <Link
          to='/dashboard/courses-created'
          style={{ textDecoration: 'none', color: 'GrayText' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <LocalLibraryIcon style={{ fill: '#6d54de' }} fontSize='large' />
            </ListItemIcon>
            <ListItemText primary='Courses Created' />
          </ListItemButton>
        </Link>
      )}
      {auth.role == 'admin' && (
        <Link
          to='/dashboard/users'
          style={{ textDecoration: 'none', color: 'GrayText' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon style={{ fill: '#6d54de' }} fontSize='large' />
            </ListItemIcon>
            <ListItemText primary='All Users' />
          </ListItemButton>
        </Link>
      )}
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

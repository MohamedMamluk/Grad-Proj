import {
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import styles from './course-created.module.css';
const CoursesCreated = () => {
  return (
    <div>
      <div className={styles.add__course_container}>
        <Link
          to='/dashboard/courses-created/new'
          style={{
            textDecoration: 'none',
            color: 'GrayText',
          }}
        >
          <ListItemButton style={{ width: 'max-content' }}>
            <ListItemIcon>
              <AddIcon style={{ fill: '#6d54de' }} fontSize='large' />
            </ListItemIcon>
            <ListItemText primary='Add New Course' />
          </ListItemButton>
        </Link>{' '}
      </div>
    </div>
  );
};

export default CoursesCreated;

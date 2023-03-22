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
import LinkButton from '../../../../components/buttons/LinkButton';
import EnhancedTable from '../../../../components/Table';
import CouForAdmin from '../../../../components/CoursesForAdmin/CouForAdmin';
import { useTranslation } from 'react-i18next';
const CoursesCreated = () => {
  let [t, i18n] = useTranslation();
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
            <ListItemText primary={t('Add New Course')} />
          </ListItemButton>
        </Link>
        {/* <LinkButton
          label='Update Course'
          link='/dashboard/courses-created/update/6405d0fd6b9f612f3c41e0f6'
        /> */}
      </div>
      {/* <EnhancedTable /> */}
      <CouForAdmin />
    </div>
  );
};

export default CoursesCreated;

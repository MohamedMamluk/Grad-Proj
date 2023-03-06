import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
const LinkButton = ({ label, link }) => {
  return (
    <Link
      to={link}
      style={{
        textDecoration: 'none',
        color: 'GrayText',
      }}
    >
      <ListItemButton style={{ width: 'max-content' }}>
        <ListItemIcon>
          <AddIcon style={{ fill: '#6d54de' }} fontSize='large' />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </Link>
  );
};

export default LinkButton;

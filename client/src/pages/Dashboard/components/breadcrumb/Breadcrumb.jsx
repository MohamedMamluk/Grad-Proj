import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
function LinkRouter(props) {
  return (
    <Link
      {...props}
      component={RouterLink}
      sx={{
        '&:hover': {
          color: 'wheat',
          textDecoration: 'none',
        },
      }}
    />
  );
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      color='inherit'
      noWrap
      sx={{ flexGrow: 1, textTransform: 'capitalize' }}
    >
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color='wheat' fontWeight='bold' key={to}>
            {value}
          </Typography>
        ) : (
          <LinkRouter underline='hover' color='inherit' to={to} key={to}>
            {value}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthWrapper = () => {
  const location = useLocation();
  const user = useSelector((store) => store.auth);
  //   const token = localStorage.getItem('token');

  return user.token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default AuthWrapper;

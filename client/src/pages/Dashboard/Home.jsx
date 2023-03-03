import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../features/auth/authSlice';
const DashboardHome = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');

    axios
      .get(`http://localhost:7000/api/${user.role || role}/${user.id || id}`)
      .then((res) => {
        dispatch(setUserData(res.data.user));
        console.log(user);
      });
  }, []);
  if (!user.userData) {
    return <h1>loading...</h1>;
  }
  return <div>Hello, {user.userData.email}</div>;
};

export default DashboardHome;

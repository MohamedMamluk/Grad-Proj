import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import DashboardCourses from './pages/Dashboard/Course';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Explore from './pages/Dashboard/Explore';
import Layout from './pages/Dashboard/Layout';
import DashboardHome from './pages/Dashboard/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Profile from './pages/Dashboard/Profile';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('token');
    if (user) {
      navigate('/dashboard');
    }
  }, []);
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='courses' element={<Courses />} />
      <Route path='/dashboard' element={<Layout />}>
        <Route index element={<DashboardHome />} />
        <Route path='explore' element={<Explore />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

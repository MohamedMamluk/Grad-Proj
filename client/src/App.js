import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import DashboardCourses from './pages/Dashboard/Course';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Explore from './pages/Dashboard/Explore';
import Layout from './pages/Dashboard/components/Layout';
import DashboardHome from './pages/Dashboard/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Profile from './pages/Dashboard/Profile';
import Payment from './pages/Payment';
import Enrolled from './pages/Enrolled';
import CoursesCreated from './pages/Dashboard/courses-created-page/CoursesCreated';
import Users from './pages/Dashboard/users-page/Users';
import CreateCourse from './pages/Dashboard/create-course-page/CreateCourse';
import UpdateCourse from './pages/Dashboard/update-course-page/UpdateCourse';

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
      <Route path='payment' element={<Payment />} />
      <Route path='courses' element={<Courses />} />
      <Route path='enrolled' element={<Enrolled />} />
      <Route path='/dashboard' element={<Layout />}>
        <Route index element={<DashboardHome />} />
        <Route path='explore' element={<Explore />} />
        <Route path='profile' element={<Profile />} />
        <Route path='courses-created/new' element={<CreateCourse />} />
        <Route path='courses-created/update/:id' element={<UpdateCourse />} />
        <Route path='courses-created' element={<CoursesCreated />} />
        <Route path='users' element={<Users />} />
      </Route>
      <Route path='*' element={<h1>Route not found</h1>} />
    </Routes>
  );
}

export default App;

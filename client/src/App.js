import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Explore from './pages/Dashboard/pages/explore-page/Explore';
import Layout from './pages/Dashboard/components/Layout';
import DashboardHome from './pages/Dashboard/pages/home-page/Home';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Profile from './pages/Dashboard/pages/profile-page/Profile';
import Payment from './pages/Payment/pages/Payment';
import Enrolled from './pages/Payment/pages/Enrolled';
import CoursesCreated from './pages/Dashboard/pages/courses-created-page/CoursesCreated';
import Users from './pages/Dashboard/pages/users-page/Users';
import CreateCourse from './pages/Dashboard/pages/courses-created-page/create-course-page/CreateCourse';
import UpdateCourse from './pages/Dashboard/pages/courses-created-page/update-course-page/UpdateCourse';
import AuthWrapper from './components/AuthWrapper';
import SingleCourse from './pages/Dashboard/pages/course-page/Course';
import Lesson from './pages/Dashboard/pages/lesson-page/Lesson';
import SearchPage from './pages/SearchPage';
import Roadmap from './components/Roadmaps/Roadmap';

function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='payment/:id' element={<Payment />} />
      <Route path='courses' element={<Courses />} />
      <Route path='enrolled' element={<Enrolled />} />
      <Route path='search' element={<SearchPage />} />
      <Route path='roadmap' element={<Roadmap />} />
      <Route element={<AuthWrapper />}>
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<DashboardHome />} />
          <Route path='explore' element={<Explore />} />
          <Route path='profile' element={<Profile />} />
          <Route path='courses-created/new' element={<CreateCourse />} />
          <Route path='courses-created/update/:id' element={<UpdateCourse />} />
          <Route path='courses-created' element={<CoursesCreated />} />
          <Route path='users' element={<Users />} />
          <Route path='courses/:id' element={<SingleCourse />} />
          <Route path='courses/:id/lesson/:id' element={<Lesson />} />
        </Route>
      </Route>
      <Route path='*' element={<h1>Route not found</h1>} />
    </Routes>
  );
}

export default App;

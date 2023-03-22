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
import Lesson from './pages/Dashboard/pages/lesson-pages/Lesson';
import ContactUs from './pages/Contact';
import SearchPage from './pages/SearchPage';
import Roadmap from './components/Roadmaps/Roadmap';
import LessonHome from './pages/Dashboard/pages/lesson-pages/LessonHome';
import Balance from './pages/Dashboard/pages/balance/Balance';
import ConfirmEmail from './pages/ConfirmEmail';
import ResetPassword from './pages/ResetPassword';

import "./i18n"

import NotFound from './pages/not-found/NotFound.tsx';
import ConfirmEmailPage from './pages/ConfirmEmailPage/ConfirmEmailPage';
import EnrolledCourses from './pages/Dashboard/pages/enrolled-courses/EnrolledCourses';


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
      <Route path='contact' element={<ContactUs />} />
      <Route path='confirm/:code' element={<ConfirmEmail />} />
      <Route path='confirm-mail' element={<ConfirmEmailPage />} />
      <Route path='reset' element={<ResetPassword />} />
      <Route element={<AuthWrapper />}>
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<DashboardHome />} />
          <Route path='courses' element={<Explore />} />
          <Route path='profile' element={<Profile />} />
          <Route path='balance' element={<Balance />} />
          <Route path='enrolled-courses' element={<EnrolledCourses />} />
          <Route path='courses-created/new' element={<CreateCourse />} />
          <Route path='courses-created/update/:id' element={<UpdateCourse />} />
          <Route path='courses-created' element={<CoursesCreated />} />
          <Route path='users' element={<Users />} />
          <Route exact path='courses/:id' element={<SingleCourse />} />
          <Route path='courses/:id/lesson' element={<LessonHome />} />
          <Route path='courses/:id/lesson/:id' element={<Lesson />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

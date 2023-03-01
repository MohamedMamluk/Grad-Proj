import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Layout from './pages/Dashboard/Layout';
import DashboardHome from './pages/Dashboard/Home';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='courses' element={<Courses />} />
      <Route path='/dashboard' element={<Layout />}>
        <Route index element={<DashboardHome />} />
      </Route>
    </Routes>
  );
}

export default App;

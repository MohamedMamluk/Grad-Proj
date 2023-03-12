import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { setUser } from './features/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const container = document.getElementById('root');
const root = createRoot(container);
// Production
axios.defaults.baseURL = 'https://mindson.onrender.com/api/';
// Development
// axios.defaults.baseURL = 'http://localhost:7000/api/';

function Index() {
  const user = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');
    if (token) {
      dispatch(setUser({ token, id, role }));
      toast.success('Logged in');
    }
  }, []);
  return (
    <>
      <Router>
        <App />
      </Router>
      <ToastContainer />
    </>
  );
}
root.render(
  <Provider store={store}>
    <Index />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/header/header';
import { setUser } from './features/auth/authSlice';
const container = document.getElementById('root');
const root = createRoot(container);
function Index() {
  const user = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');
    if (token) {
      dispatch(setUser({ token, id, role }));
    }
  }, []);
  return (
    <>
      <Router>
        {/* <header>
          <Link to='/'>Home</Link>
          <Link to='/login'>login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </header> */}

        <App />
      </Router>
    </>
  );
}
root.render(
  <Provider store={store}>
    <Index />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

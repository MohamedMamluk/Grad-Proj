import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
function Index() {
  const user = useSelector((store) => store.auth.token);
  return (
    <>
      <Router>
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

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id='navbar'>
      <Link className='navLink' to='/'>
        Home
      </Link>
      <Link className='navLink' to='/login'>
        login
      </Link>
      <Link className='navLink' to='/register'>
        Register
      </Link>

      <Link className='navLink' to='/courses'>
        Courses
      </Link>
      <Link className='navLink' to='/dashboard'>
        Dashboard
      </Link>
    </header>
  );
};

export default Header;

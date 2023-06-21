import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {

  
  return (
    <header>
      <div className="inner">
        <Link className='site-name' to='/'>
        <h3> Help Foreigner </h3>
        </Link>
        <ul class = "center">
          <li>
            <Link className='hospital' to='/hospital'>
              Industrial aid hospital
            </Link>
          </li>
          <li>
            <Link className='solution' to='/solution'>
              Industrial Accident Prevention Manual
            </Link>
          </li>
          <li>
            <Link className='danger' to='/danger'>
              Dangerous Safety Workplace
            </Link>
          </li>
          <li>
            <Link className='community' to='/community'>
              Community
            </Link>
          </li>
        </ul>
        <ul class="menu">
          <li>
            <Link className='header-nav-item' to='/signin'>
              Sign up
            </Link>
          </li>
          <li>
            <Link className='header-nav-item' to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
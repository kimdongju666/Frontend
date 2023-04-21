import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
  return (
    <header>
      <div className="inner">
        <Link className='site-name' to='/'>
        <h3> 이름 </h3>
        </Link>
        <ul class = "center">
          <li>
            <Link className='menu1' to='/menu1'>
              메뉴 1
            </Link>
          </li>
          <li>
            <Link className='menu2' to='/menu2'>
              메뉴 2
            </Link>
          </li>
          <li>
            <Link className='menu3' to='/menu3'>
              메뉴 3
            </Link>
          </li>
          <li>
            <Link className='menu4' to='/menu4'>
              메뉴 4
            </Link>
          </li>
        </ul>
        <ul class="menu">
          <li>
            <Link className='header-nav-item' to='/signin'>
              회원 가입
            </Link>
          </li>
          <li>
            <Link className='header-nav-item' to='/login'>
              로그인
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
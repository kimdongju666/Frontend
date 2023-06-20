import React, { useState } from 'react'
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
            <Link className='hospital' to='/hospital'>
              산재 지정 병원 위치
            </Link>
          </li>
          <li>
            <Link className='solution' to='/solution'>
              산재 예방 방법
            </Link>
          </li>
          <li>
            <Link className='danger' to='/danger'>
              위험성 평가
            </Link>
          </li>
          <li>
            <Link className='community' to='/community'>
              커뮤니티
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
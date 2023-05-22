import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  
  return (
    <header>
      <div className="inner">
        <Link className='site-name' to='/'>
        <h3> 이름 </h3>
        </Link>
        <ul class = "center">
          <li>
            <Link className='hospital' to='/hospital'>
              내 근처 진료소
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
          <li className='dropDown'  onMouseOver={handleMouseEnter} 
            >
            <Link className='community' to='/community'>
              커뮤니티
            </Link>
            {isDropdownOpen && (
              <div className='dropDownMenu'  onMouseOut={handleMouseLeave}>
                <Link className='suggestions' to='/suggestions'>
                  건의사항
                </Link>
            </div>
            )}
            
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
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/LoginHeader.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginHeader() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLogout = () => {
    localStorage.removeItem('pw')
    localStorage.removeItem('username')
    localStorage.removeItem('authToken')
    localStorage.removeItem('id')
    window.location.replace("http://localhost:3000/")
  }



  return (
    <header>
      <div className="inner">
        <Link className='site-name' to='/'>
        <h3 /* onClick={SessionHandler} */> 이름 </h3>
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
          <li>
            <Link className='community' to='/community'>
              커뮤니티
            </Link>
          </li>
        </ul>
        
        <p>{localStorage.getItem('username')}님 어서오세요!<button /* variant='primary' */ className="logout" onClick={ handleShow }>Logout</button></p>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>로그아웃 하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={onLogout}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </header>
  );
}

export default LoginHeader;
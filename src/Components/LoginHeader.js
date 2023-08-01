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
        
        <p>{localStorage.getItem('username')} hello!<button /* variant='primary' */ className="logout" onClick={ handleShow }>Logout</button></p>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout check</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={onLogout}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </header>
  );
}

export default LoginHeader;
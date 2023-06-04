import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const CommunityModal = ( {show, onHide}) => {

  const [title, settitle] = useState("")
  const [username, setusername] = useState("")
  const [timestamp, settimestamp] = useState("")
  const [content, setcontent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/board", {
        title: title,
        username: username,
        content: content,
      })
      .then(() => {
        alert("저장되었습니다!");
      })

      .catch(function (error) {
        alert("저장에 실패했습니다!");
      });
  };


  return (
    <Modal
      show = {show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          커뮤니티 글 작성
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>제목</Form.Label>
              <Form.Control
                type="title"
                value={title}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>내용</Form.Label>
              <Form.Control 
              value={content}
              as="textarea" rows={9} />
            </Form.Group>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>닫기</Button>
        <Button variant='primary' onClick={ handleSubmit /* onHide */}>저장</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CommunityModal
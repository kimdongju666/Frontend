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
        alert("Your save was successful");
      })

      .catch(function (error) {
        alert("Your save was failed");
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
          community board write
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
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
              <Form.Label>content</Form.Label>
              <Form.Control 
              value={content}
              as="textarea" rows={9} />
            </Form.Group>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>close</Button>
        <Button variant='primary' onClick={ handleSubmit /* onHide */}>submit</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CommunityModal
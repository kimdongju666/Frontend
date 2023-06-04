import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {dummyData} from './Data.js';
import calander from '../Images/calendar.png';
import person from '../Images/person.png';


const CommunityItemModal = ( {show, onHide}) => {
  return (
    <>
    {dummyData.map(item => (
      <Modal
        show = {show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {item.title}
          </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{height : '300px'}}>
        {item.content}
      </Modal.Body>
      <Modal.Footer style={{justifyContent: 'space-between'}}>
        <div className='info'>
              <img src={person} alt='author' className='personImg' ></img>
              <span style={{marginRight : '10px'}}>{item.username}</span>
              <img src={calander} alt='date' className='calanderImg'></img>
              <span>{item.date}</span>
        </div>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
      ))}
    </>
  )
}

export default CommunityItemModal
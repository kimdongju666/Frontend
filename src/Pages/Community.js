import React, { useState } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../CSS/Community.css';
import CommunityItem from '../Components/CommunityItem';
import add from '../Images/add.png'
import CommunityModal from '../Components/CommunityModal';
import CommunityItemModal from '../Components/CommunityItemModal';

function Community() {
  const items = [<CommunityItem /> , <CommunityItem /> , <CommunityItem />,<CommunityItem /> , <CommunityItem /> , <CommunityItem />, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const [showModal, setShowModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setShowModal(true); 
  }
  const handleItemClick = () => {
    setShowItemModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false); 
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // 폼 제출 시 새로고침 방지
    // 여기서 입력값을 사용하거나 다른 작업을 수행할 수 있습니다.
    console.log(inputValue);
    setShowModal(false); // 모달 상태를 false로 변경하여 모달 닫음
    setInputValue(''); // 입력값 초기화
  };

  return (
    <>
    <CommunityModal show={showModal}  onHide={() => setShowModal(false)}/>
    <CommunityItemModal show={showItemModal}  onHide={() => setShowItemModal(false)}/>
    <Header />
    <div className='inner-container'>
      <div className='content'>
        <h2>Community</h2>
        <div className='content-search'>
          <input type='text' id='content-search' placeholder='Please enter a search word' className='input-text'></input>
          <button className='search-button'>Search</button>
        </div>
        <div className='add-btn'>
          <button className='add-button' onClick={handleButtonClick}><img src={add} alt='add'></img>Write</button>
        </div>
        <div className='content-list'>
        <div className="GridContainer">
            {items.map((item, key) => (
              <div
                className="GridItem"
                onClick={handleItemClick}
                key={key}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
export default Community;
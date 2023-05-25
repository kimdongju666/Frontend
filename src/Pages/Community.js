import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../CSS/Community.css';
import CommunityItem from '../Components/CommunityItem';

function Community() {
  const items = [<CommunityItem /> , <CommunityItem /> , <CommunityItem />,<CommunityItem /> , <CommunityItem /> , <CommunityItem />, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  return (
    <>
    <Header />
    <div className='inner-container'>
      <div className='content'>
        <h2>커뮤니티</h2>
        <div className='content-search'>
          <input type='text' id='content-search' placeholder='검색어를 입력해주세요.' className='input-text'></input>
          <button className='search-button'>검색</button>
        </div>
        <div className='content-list'>
        <div className="GridContainer">
            {items.map((item, key) => (
              <div
                className="GridItem"
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
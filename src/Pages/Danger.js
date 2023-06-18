import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Voc from '../Components/Voc';
import '../CSS/Danger.css'
import Search from '../Components/Search';


function Danger() {

  return (
    <>
    <Header />
    <div className='container'>
      <div className='inner'>
        <h2>위험성 평가 기업 검색</h2>
        <Search />
        {/* <div className='content-search'>
          <input type='text' id='content-search' placeholder='검색어를 입력해주세요.' className='input-text'></input>
          <button className='search-button'>검색</button>
        </div> */}

        <Voc />
      </div>
    </div>
    <Footer />
    </>
  )
}
export default Danger;
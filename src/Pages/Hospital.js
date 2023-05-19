import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../CSS/Hospital.css";

function Hospital() {
  return (
    <>
    <Header />
    <div className='content'>
      <div className='circle'>
        <div>1</div>
      </div>
      <h4>제목을 입력하세요</h4>
    </div>
    <Footer />
    </>
    
  )
}
export default Hospital;
import React from 'react'
import Header from './Header';
import Slide from './Slide';
import '../CSS/Home.css';
import Grid from './Grid';
import Footer from './Footer';


function Home() {
  return (
    <>
    <Header />
      <div style={{ marginBottom: "3rem" }}></div> {/* 간격을 주기 위한 빈 div */}
    <Slide />
    <Grid />
    <Footer />
    </>
    
  )
}
export default Home;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../CSS/Slide.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import img1 from '../Images/쏘쥬.jpg';
import img2 from '../Images/1.jpg';
import img3 from '../Images/2.jpg';
import img4 from '../Images/이력서 사진.jpg';
import img5 from '../Images/쏘주2.jpg';


function SliderContainer() {
  const items = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
  ];
const swiperStyle = {
  position : "relative",
  width: "85%",
  height : "600px",
  border: "1px solid lightgray",
  borderRadius: "10px",
  marginTop: "10px",
  backgroundColor: "rgba(35, 115, 225)"
}

  return (
    <>
      <Swiper style={swiperStyle}
        effect={"slide"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        navigation={{}}
        pagination={{
          clickable: false,
        }}
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={item.src} alt="슬라이드 이미지" style={{width: "80%", height: "400px", borderRadius: "10px"}}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderContainer;

import React from "react";
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
import Hospital from '../Images/hospital.png';


function SliderContainer() {

    const swiperStyle = {
        position: "relative",
        width: "1390px",
        height: "450px",
        border: "1px solid black",
        borderRadius: "40px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        backgroundColor : "rgba(0, 115, 225)",
    };
const wrapperStyle = {

/*  */
}
const slideStyle = {
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  width : "80%",
  height : "300px",
}


  return (
    <div className="wrapper" style={wrapperStyle}>
      <Swiper style={swiperStyle}
        effect={"slide"}
        autoplay={{
          delay: 1000000,
          disableOnInteraction: false,
        }}
        spaceBetween={25}
        slidesPerView={3}
        centeredSlides={true}
        navigation={{
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        className="mySwiper"

        
      >
        <SwiperSlide style={slideStyle}></SwiperSlide>
        <SwiperSlide style={slideStyle}>Slide 2</SwiperSlide>
        <SwiperSlide style={slideStyle}>Slide 3</SwiperSlide>
        <SwiperSlide style={slideStyle}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderContainer;

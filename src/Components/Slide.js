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


function SliderContainer() {

const swiperStyle = {
  position : "relative",
  width: "1400px",
  height : "665px",
}
const wrapperStyle = {
  backgroundColor : "rgba(35, 115, 225)",
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
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        navigation={{
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        
      >
        <SwiperSlide style={slideStyle}>Slide 1</SwiperSlide>
        <SwiperSlide style={slideStyle}>Slide 2</SwiperSlide>
        <SwiperSlide style={slideStyle}>Slide 3</SwiperSlide>
        <SwiperSlide style={slideStyle}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderContainer;

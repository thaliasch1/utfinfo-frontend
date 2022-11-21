import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { BottomBar } from "../BottomBar";
import { HomeContainer, SliderContainer } from "./styles";
import axios from "axios";
import { SlideType } from "../../../pages/admin";
import { useSlider } from "../context";

export function Slider() {
  
  const { imgs, setImgs } = useSlider();
  const url = process.env.BASE_URL

  const getSlides = async () => {
    const response = await axios.get(`${url}/slides`);
    setImgs(response.data);
  };

  useEffect(() => {
    getSlides();
    console.log(".")
  }, []);

  return (
    <HomeContainer>
      <SliderContainer className="swiper-container">
        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{ disableOnInteraction: false }}
          slidesPerView={1.5}
          normalizeSlideIndex={true}
          allowTouchMove={false}
          spaceBetween={20}
          centerInsufficientSlides={true}
          modules={[Autoplay]}
          className="swiper"
        >
          {imgs.map((slide: any) => {
            return (
              <SwiperSlide
                data-swiper-autoplay={slide.time ? slide.time * 1000 : 8000}
                key={slide.id}
                className="swiper-slide"
              >
                <img src={slide.img} alt="Slider img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SliderContainer>
      <BottomBar album={imgs} />
    </HomeContainer>
  );
}

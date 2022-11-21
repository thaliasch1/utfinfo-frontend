import React from "react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BottomBarContainer, Logo, TextSlide, Instagram, Weather, Container, DateAndTime } from "./styles";
import Clock from "react-live-clock";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


export function BottomBar({ album }: { album: any }) {

  let today = new Date();

  return (
    <BottomBarContainer>

      <Logo>
        <hr />
        <Container>
          <img src={"./amarelo.png"} />
          <Instagram>
            <img src={"./insta.png"} />
            <p> utfpr_td</p>
          </Instagram>

          <Weather>
            <DateAndTime>
            <Clock ticking={true} className={"clock"} />
            <p>{today.toLocaleDateString("pt-BR")}</p>
            </DateAndTime>
          </Weather>
        </Container>
      </Logo>
      <TextSlide>
        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{ disableOnInteraction: false }}
          slidesPerView={1.5}
          spaceBetween={400}
          allowTouchMove={false}
          centerInsufficientSlides={true}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Autoplay, EffectFade]}
          className="swiper"
        >
          {album.map((slide: any) => {
            return (
              <SwiperSlide
                data-swiper-autoplay={slide.time ? slide.time * 1000 : 8000}
                key={slide.id}
                className="swiper-slide"
              >
                <p key={slide.id}>{slide.description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TextSlide>
    </BottomBarContainer>
  );
}

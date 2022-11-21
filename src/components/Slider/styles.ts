import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  background: rgb(253, 207, 11);
  background: linear-gradient(90deg, rgba(253, 207, 11, 0.5718662464985995) 0%, rgba(78, 31, 159, 0.5886729691876751) 100%);
  flex-direction: column;
  justify-content: space-between;
  font-family: "Futura Md BT", sans-serif;
`;

export const SliderContainer = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  padding-top: 10px;

  p {
    top: 580px;
    z-index: 99999999;
  }

  .swiper-slide {
    background-color: #242523;
    display: flex;
    border-radius: 5px;

    justify-content: center;

    overflow-y: hidden;

    img {
      max-width: 1200px;
      max-height: 120px;
      min-height: 600px;
    }

    &.swiper-slide-prev {
      opacity: 0.4;
    }

    &.swiper-slide-next {
      opacity: 0.4;
    }
    &.swiper-slide-active {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
  }
`;

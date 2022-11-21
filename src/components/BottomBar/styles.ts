import styled from "styled-components";

export const BottomBarContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  
  .swiper-slide {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    .slide-item {
      transition: 0.23s ease-out;
      transform: scale(1);
    }
    p {
      white-space: pre-wrap; /* or pre-line */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      margin-top: 20px;
      text-align: center;
      padding: 5px;
      height: 100px;
    }
  }
`;

export const Logo = styled.div`
  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  position: fixed;
  flex-direction: column;
  bottom: 0;
  z-index: 2;
  width: 100%;
 

  img {
    width: 380px;
    height: 100px;
  }

  hr {
    width: 100%;
    margin-bottom: 15px;
    border: 1px solid rgba(190, 187, 196, 0.17);
  }
  .clock {
    font-size: 50px;
  }
`;

export const Container = styled.div`

  width: 100%;
  display: flex;
  margin-bottom: 15px;
  color: #fff;
  justify-content: space-evenly;


`;

export const Instagram = styled.div`


 display: flex;
 align-items: center;
 align-content: center;
 font-size: 30px;
 margin-right: 30px;
 text-transform: uppercase;

 img {
   width: 40px;
   height: 40px;
   margin-right: 16px;
 }


`;

export const Weather = styled.div`

display: flex;
justify-content: center;
align-items: center;
background-color:rgba(190, 187, 196, 0.17);
border-radius: 6px;

section {
  border-left: 1px solid gray;
 


 }

p {
  font-size: 50px;

}

span {

  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: lighter;
  width: 400px;
  margin-left: 30px;


}

div {
  height:70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}

`;

export const DateAndTime = styled.div`

display: flex;
flex-direction: column;
width: 270px;
margin-top: 20px;
p {

  margin-top: 0px;
  font-size: 25px;

}

`

export const TextSlide = styled.div`
  padding: 0 20px 0 20px;
  background-color: #242523;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 280px;
  font-family: "Futura Md BT", sans-serif;
  color: #fff;
`;

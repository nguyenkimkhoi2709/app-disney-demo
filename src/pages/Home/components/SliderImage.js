import React from "react";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import slider1 from '../../../assets/images/slider-badging.jpg';
import slider2 from '../../../assets/images/slider-scale.jpg';
import slider3 from '../../../assets/images/slider-badag.jpg';
import slider4 from '../../../assets/images/slider-scales.jpg';

const SliderStyled = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity .2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`
const WrapStyled = styled.div`
  
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    display: block;
    // position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      // transition-duration: 300ms;
    }
  }
`

function SliderImage() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
  }

  return (
    <SliderStyled {...settings}>
      <WrapStyled>
        <a>
          <img src={slider1} alt="not-found"/>
        </a>
      </WrapStyled>
      <WrapStyled>
        <a>
          <img src={slider2} alt="not-found"/>
        </a>
      </WrapStyled>
      <WrapStyled>
        <a>
          <img src={slider3} alt="not-found"/>
        </a>
      </WrapStyled>
      <WrapStyled>
        <a>
          <img src={slider4} alt="not-found"/>
        </a>
      </WrapStyled>
      </SliderStyled>
  )
}

export default SliderImage
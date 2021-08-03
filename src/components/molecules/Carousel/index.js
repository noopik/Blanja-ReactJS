import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { ImageCard } from './styled';
// import './styled/carousel.css';
import ButtonArrow from './styled/ButtonArrow';
import {
  DMCarousel1,
  DMCarousel2,
  DMCarousel3,
  DMCarousel4,
} from '../../../assets/images';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  // console.log(123, className);
  return (
    <ButtonArrow>
      <div className={className} onClick={onClick}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4531 22.12L17.5598 16L11.4531 9.88L13.3331 8L21.3331 16L13.3331 24L11.4531 22.12Z"
            fill="#9B9B9B"
          />
        </svg>
      </div>
    </ButtonArrow>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <ButtonArrow prev>
      <div className={className} onClick={onClick}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4531 22.12L17.5598 16L11.4531 9.88L13.3331 8L21.3331 16L13.3331 24L11.4531 22.12Z"
            fill="#9B9B9B"
          />
        </svg>
      </div>
    </ButtonArrow>
  );
}

const MultipleItems = ({ className }) => {
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '85px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    speed: 800,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const HeaderCarousel = styled.header`
    /* background-color: yellow; */
  `;
  return (
    <HeaderCarousel className={className}>
      <Slider {...settings}>
        <ImageCard image={DMCarousel1} title="Casual Epic" to="#" />
        <ImageCard image={DMCarousel2} title="Urban Distro" to="#" />
        <ImageCard image={DMCarousel3} title="Metropolitan" to="#" />
        <ImageCard image={DMCarousel4} title="Anak Gunung" to="#" />
      </Slider>
    </HeaderCarousel>
  );
};

export default MultipleItems;

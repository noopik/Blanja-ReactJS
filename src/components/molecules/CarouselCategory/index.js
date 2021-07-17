import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { ImageCard } from './../Carousel/styled';
// import './styled/carousel.css';
import {
  ProductCategory1,
  ProductCategory2,
  ProductCategory3,
  ProductCategory4,
  ProductCategory5,
} from '../../../assets/images/index';

const ButtonNext = styled.div`
  position: relative;
  .slick-arrow.slick-next {
    position: absolute;
    right: -3.5rem;
    top: -6.2rem;
    width: 36px;
    height: 36px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(181, 181, 181, 0.25);
    width: 52px;
    height: 52px;
    margin: 0 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.slick-next::before {
      display: none;
      content: 'O';
      width: 100px;
      height: 100px;
    }
  }

  .slick-arrow.slick-next:hover {
    box-shadow: -2px 0px 12px rgba(250, 50, 50, 0.5);
  }
  .slick-arrow.slick-next:hover svg path {
    fill: #db3022;
  }
  svg {
    transform: rotate(${({ prev }) => (prev ? 180 : 0)}deg);
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  // console.log(123, className);
  return (
    <ButtonNext>
      <div className={`${className} btn`} onClick={onClick}>
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
    </ButtonNext>
  );
}

export default class MultipleItems extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const { className } = this.props;
    const settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
    };

    const HeaderCarousel = styled.header`
      /* background-color: yellow; */
    `;
    return (
      <HeaderCarousel className={className}>
        <Slider
          ref={(slider) => (this.slider = slider)}
          {...settings}
          className=""
        >
          <ImageCard
            category
            image={ProductCategory1}
            title="T-Shirt"
            bgCard="red"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory2}
            title="Pants"
            bgCard="blue"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory3}
            title="Jacket"
            bgCard="red"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory4}
            title="Jeans"
            bgCard="orange"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory5}
            title="Shoes"
            bgCard="cyan"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory1}
            title="T-Shirt"
            bgCard="red"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory2}
            title="Pants"
            bgCard="blue"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory3}
            title="Jacket"
            bgCard="blue"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory4}
            title="Jeans"
            bgCard="orange"
            to="categories"
          />
          <ImageCard
            category
            image={ProductCategory5}
            title="Shoes"
            bgCard="cyan"
            to="categories"
          />
        </Slider>
      </HeaderCarousel>
    );
  }
}

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
// import './styled/carousel.css';
import { DMNullImage } from '../../../assets/images/index';
import { Axios } from '../../../config';
import { ImageCard } from './../Carousel/styled';

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
  const { className, onClick } = props;
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
    this.state = {
      // categories: [],
      colors: ['red', 'blue', 'orange', 'cyan', 'blue'],
    };
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  componentDidMount() {
    Axios.get('/category')
      .then((res) => {
        // console.log(res.data.data);
        const resdata = res.data;
        const data = resdata.data;
        this.setState({
          categories: data,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  render() {
    const { className, categories } = this.props;
    const { colors } = this.state;
    // console.log(categories);
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
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
          {categories &&
            categories.map((item, index) => (
              <ImageCard
                category
                key={index}
                image={item.image ? item.image : DMNullImage}
                title={item.nameCategory}
                bgCard={colors[index]}
                to={`categories/${item.id}`}
              />
            ))}
        </Slider>
      </HeaderCarousel>
    );
  }
}

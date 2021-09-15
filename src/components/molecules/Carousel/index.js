import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { Axios } from '../../../config';
import { ImageCard } from './styled';
// import './styled/carousel.css';
import ButtonArrow from './styled/ButtonArrow';

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
  const [product, setProduct] = useState([]);
  const HeaderCarousel = styled.header`
    /* background-color: yellow; */
  `;

  useEffect(() => {
    Axios.get('/products?page=2&limit=5')
      .then((result) => {
        const resData = result.data.data;
        setProduct(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('product', product);
  return (
    <HeaderCarousel className={className}>
      <Slider {...settings}>
        {product &&
          product.map((item) => {
            return (
              <ImageCard
                image={item.imageProduct}
                title={item.nameProduct}
                to={`/products/${item.id}`}
              />
            );
          })}
      </Slider>
    </HeaderCarousel>
  );
};

export default MultipleItems;

import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  .slick-arrow.slick-next {
    position: absolute;
    right: 2rem;
    top: -6rem;
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
  .slick-arrow.slick-prev {
    position: absolute;
    z-index: 9;
    left: 0.4rem;
    top: 6rem;
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

    &.slick-prev::before {
      display: none;
      content: 'O';
      width: 100px;
      height: 100px;
      background-color: violet;
    }
  }

  .slick-arrow.slick-next:hover,
  .slick-arrow.slick-prev:hover {
    box-shadow: 0px 0px 12px rgba(250, 50, 50, 0.5);
  }
  .slick-arrow.slick-next:hover svg path,
  .slick-arrow.slick-prev:hover svg path {
    fill: #db3022;
  }
  svg {
    transform: rotate(${({ prev }) => (prev ? 180 : 0)}deg);
  }
`;

const ButtonArrow = ({ children, prev }) => {
  return <Button prev={prev}>{children}</Button>;
};

export default ButtonArrow;

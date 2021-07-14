import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageCarousel1 } from '../../../../assets/images';

const Wrapper = styled.div`
  width: 95%;
  position: relative;
  /* margin-right: 1rem; */
  img {
    width: 100%;
    height: 200px;
    margin-right: 30px;
    border-radius: 1rem;
    object-fit: cover;
    z-index: -9;
  }
  h3 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #0e0e0d45;
    z-index: 9;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 38px;
    color: #ffffff;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImageCard = ({ to }) => {
  return (
    <Link className="anchor" to="#">
      <Wrapper>
        <img src={ImageCarousel1} alt="img" />
        <h3>Trend 2020</h3>
      </Wrapper>
    </Link>
  );
};

export default ImageCard;

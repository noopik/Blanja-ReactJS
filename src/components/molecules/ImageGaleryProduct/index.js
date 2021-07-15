import React from 'react';
import styled from 'styled-components';
import { ProductCategory } from '../../../assets/images';

const ImageProducts = () => {
  return (
    <ImageWrapper>
      <img className="main-image" src={ProductCategory} alt="1" />
      <div className="tumb-wrapper">
        <img className="mini-img" src={ProductCategory} alt="2" />
        <img className="mini-img" src={ProductCategory} alt="3" />
        <img className="mini-img" src={ProductCategory} alt="4" />
        <img className="mini-img" src={ProductCategory} alt="5" />
        <img className="mini-img" src={ProductCategory} alt="6" />
      </div>
    </ImageWrapper>
  );
};

export default ImageProducts;

const ImageWrapper = styled.div`
  /* background-color: yellow; */
  width: max-content;

  img {
    width: 250px;
    /* height: 378px; */
    border-radius: 20px;
  }

  .tumb-wrapper {
    margin-top: 1.5rem;
    /* background-color: red; */
    display: flex;
    gap: 1rem;
    img {
      width: 65px;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import { DMNullImage, ProductCategory1 } from '../../../assets/images';

const ImageProducts = ({ images }) => {
  return (
    <ImageWrapper>
      <img className="main-image" src={images ? images : DMNullImage} alt="1" />
      <div className="tumb-wrapper">
        <img className="mini-img" src={DMNullImage} alt="2" />
        <img className="mini-img" src={DMNullImage} alt="3" />

        <img className="mini-img" src={DMNullImage} alt="4" />
        <img className="mini-img" src={DMNullImage} alt="5" />
        <img className="mini-img" src={DMNullImage} alt="6" />
      </div>
    </ImageWrapper>
  );
};

export default ImageProducts;

const ImageWrapper = styled.div`
  /* background-color: yellow; */
  width: max-content;
  width: 500px;

  img {
    width: 100%;
    /* height: 378px; */
    border-radius: 20px;
  }

  .tumb-wrapper {
    margin-top: 1.5rem;
    /* background-color: red; */
    display: flex;
    gap: 1rem;
    img {
      width: 70px;
      border-radius: 5px;
    }
  }
`;

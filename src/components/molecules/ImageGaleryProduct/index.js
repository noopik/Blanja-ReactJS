import React from 'react';
import styled from 'styled-components';
import { DMNullImage, ProductCategory1 } from '../../../assets/images';
import { customMedia } from '../../Layouts';

const ImageProducts = ({ images }) => {
  return (
    <ImageWrapper>
      <div className="image-main-wrapper">
        <img
          className="main-image"
          src={images ? images : DMNullImage}
          alt="1"
        />
      </div>
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
  /* width: max-content; */
  /* width: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    width: 600px;
    `}

  .image-main-wrapper {
    /* background-color: pink; */
    width: 100%;
    flex: 1;
    /* height: 70%; */
    ${customMedia.lessThan('871px')`
    /* for screen sizes less than 1280px */ 
    width: 80%

  `}
    img.main-image {
      height: max-content;
      object-fit: cover;
    }
  }

  img {
    width: 100%;
    height: 50px;
    border-radius: 20px;
  }

  .tumb-wrapper {
    margin-top: 1.5rem;
    /* background-color: red; */
    display: flex;
    gap: 1rem;
    ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */ 
    display: inline-flex;
  `}
    img {
      width: 70px;
      border-radius: 5px;
    }
  }
`;

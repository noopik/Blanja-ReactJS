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
        <div className="mini-img">
          <img className="mini-img" src={DMNullImage} alt="2" />
        </div>
        <div className="mini-img">
          <img className="mini-img" src={DMNullImage} alt="3" />
        </div>
        <div className="mini-img">
          <img className="mini-img" src={DMNullImage} alt="4" />
        </div>
        <div className="mini-img">
          <img className="mini-img" src={DMNullImage} alt="5" />{' '}
        </div>
        <div className="mini-img">
          <img className="mini-img" src={DMNullImage} alt="6" />
        </div>
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
  width: 50%;
  position: relative;

  ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    width: 600px;
    `}

  .image-main-wrapper {
    background-color: pink;
    width: 100%;
    height: 80%;
    display: flex;
    flex: 1;
    /* height: 70%; */
    ${customMedia.lessThan('871px')`
    /* for screen sizes less than 1280px */ 
    // width: 80% 
  `}
    img.main-image {
      /* height: max-content; */
      /* height: 500px; */
      /* object-fit: cover; */
      width: 100%;
      /* display: none; */
    }
  }

  img {
    /* width: 100%; */
    /* height: 50px; */
    border-radius: 20px;
  }

  .tumb-wrapper {
    margin-top: 1rem;
    height: 20%;
    width: 100%;
    position: relative;
    /* background-color: red; */
    display: flex;
    gap: 1rem;
    /* position: absolute; */
    overflow: scroll;
    .mini-img {
      display: flex;
      /* background-color: blue; */
      width: 100%;
      img {
        border-radius: 5px;
      }
    }
    ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */ 
    display: inline-flex;
  `}
  }
`;

import React from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import { ProductCategory } from '../../../assets/images';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImageGaleryProduct } from '../../../components/molecules';

const HeaderPage = () => {
  return (
    <Main>
      <div className="image-content"></div>
      <ImageGaleryProduct />
    </Main>
  );
};

export default HeaderPage;

const Main = styled.main`
  background-color: yellowgreen;

  .class {
    width: 100px;
  }
`;

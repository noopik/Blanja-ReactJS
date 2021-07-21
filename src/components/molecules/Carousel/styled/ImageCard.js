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

  img.category {
    object-fit: contain;
    padding: 25px;
  }

  h3 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    z-index: 9;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    border-radius: 1rem;
  }
  h3.main {
    background-color: #0e0e0d45;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 38px;
  }
  h3.category {
    background-color: #0e0e0d45;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
  }
`;

const ImageCard = ({
  to,
  image,
  title,
  category,
  bgCard,
  className,
  onClick,
}) => {
  return (
    <Link className="anchor" to={`${to}`}>
      <Wrapper className={className}>
        <img
          className={`${category ? 'category' : ''} ${bgCard}`}
          src={image ? image : ImageCarousel1}
          alt={title}
        />
        <h3 className={category ? 'category' : 'main'}>
          {title ? title : 'Trend 2020'}
        </h3>
      </Wrapper>
    </Link>
  );
};

export default ImageCard;

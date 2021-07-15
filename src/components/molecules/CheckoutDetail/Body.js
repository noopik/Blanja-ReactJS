import React, { useEffect, useState } from 'react';
import { Button, Counter } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';
import { ProductCategory } from '../../../assets/images';
import styled from 'styled-components';

const Body = ({ price, checkout }) => {
  return (
    <BodyWrapper className="content">
      <div className="product">
        <img src={ProductCategory} alt="img" />
        <div className="desc">
          <Text as="lg" className="">
            Men's formal suit - Black
          </Text>
          <Text color="secondary" className="store">
            Zalora
          </Text>
        </div>
      </div>
      {!checkout && <Counter />}
      <p className="price">200</p>
    </BodyWrapper>
  );
};

export default Body;

Body.defaultProps = {
  price: 100,
};

const BodyWrapper = styled.div`
  .product {
    /* background-color: yellow; */
    display: flex;

    img {
      width: 70px;
      border-radius: 15px;
    }

    .desc {
      /* background-color: yellowgreen; */
      display: flex;
      flex-direction: column;
      /* width: 800px; */
      justify-content: center;
      margin-left: 14px;
      .store {
        margin-bottom: 0;
      }
    }
  }

  .price {
    /* background-color: papayawhip; */
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 0;

    color: #222222;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { Counter } from '../../atoms';
import { Text } from '../../atoms/Typography';

const Body = ({ nameProduct, store, total, checkout, counterTotal, image }) => {
  return (
    <BodyWrapper className="content">
      <div className="product">
        <img src={image} alt="img" />
        <div className="desc">
          <Text as="lg" className="">
            {nameProduct}
          </Text>
          <Text color="secondary" className="store">
            {store}
          </Text>
        </div>
      </div>
      {!checkout && <Counter counterValue={counterTotal} />}
      <p className="price">{total}</p>
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

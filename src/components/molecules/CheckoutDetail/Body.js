import React, { useEffect, useState } from 'react';
import { Button } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';
import { ProductCategory } from '../../../assets/images';
import styled from 'styled-components';

const Body = ({ price, checkout }) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  // let price = 100;

  const increase = () => {
    const min = 1;
    let counting = count + min;

    setCount(counting);
  };

  const decrease = () => {
    const min = 1;
    let counting = count - min;

    if (counting < 2) {
      setCount(min);
    } else {
      setCount(counting);
    }
  };

  useEffect(() => {
    let multiple = count * price;
    setTotalPrice(multiple);
  }, [count]);

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
      {!checkout && (
        <div className="btn-wrapper">
          <div className="btn-circle minus" onClick={decrease} />
          <p>{count}</p>
          <div className="btn-circle plus" onClick={increase} />
        </div>
      )}
      <p className="price">$ {totalPrice}</p>
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
  .btn-wrapper {
    display: flex;
    align-items: center;

    p {
      margin: 0 1rem;
      /* background-color: yellowgreen; */
      width: 30px;
      text-align: center;
      font-weight: 600;
    }
    .btn-circle {
      width: 36px;
      height: 36px;
      border-radius: 100%;
      background-color: red;

      &.minus::before {
        content: '-';
        color: white;
        transform: scale(2.4);
      }
      &.plus::before {
        content: '+';
        transform: scale(2);
      }

      &.plus {
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(142, 142, 142, 0.25);
      }
      &.minus {
        background-color: #d5d5d5;
      }
      &.plus,
      &.minus {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.8;
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

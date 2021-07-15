import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Counter = ({ price }) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  // let price = 100;

  useEffect(() => {
    let multiple = count * price;
    setTotalPrice(multiple);
  }, [count]);

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

  return (
    <Wrapper>
      <div className="btn-circle minus" onClick={decrease} />
      <p>{count}</p>
      <div className="btn-circle plus" onClick={increase} />
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
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
`;

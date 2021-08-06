import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Counter = ({ size, counterValue, defaultValue }) => {
  const [count, setCount] = useState(1);
  const [sizeValue, setSizeValue] = useState('XS');
  const [sizeStart, setSizeStart] = useState(0);

  const typeSize = ['XS', 'S', 'M', 'L', 'XL'];
  // console.log(defaultValue, 'defaultValue');
  const increase = () => {
    const plus = count + 1;
    counterValue(plus);
    setCount(plus);
  };

  const decrease = () => {
    const minus = count - 1;
    counterValue(minus);

    if (minus < 2) {
      setCount(1);
    } else {
      setCount(minus);
    }
  };

  const sizeIncrease = () => {
    const plus = sizeStart + 1;
    if (plus === typeSize.length - 1) {
      return setSizeValue(typeSize[typeSize.length - 1]);
    }
    const plusSize = typeSize[plus];
    counterValue(plusSize);
    setSizeValue(plusSize);
    setSizeStart(plus);
  };

  const sizeDecrease = () => {
    const minus = sizeStart - 1;
    if (minus === 0) {
      return setSizeValue(typeSize[0]);
    }
    const minusSize = typeSize[minus];
    counterValue(minusSize);
    setSizeValue(typeSize[minus]);
    setSizeStart(minus);
  };

  if (size) {
    return (
      <Wrapper>
        <div className="btn-circle minus" onClick={sizeDecrease} />
        <p>{sizeValue}</p>
        <div className="btn-circle plus" onClick={sizeIncrease} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="btn-circle minus" onClick={decrease} />
      <p>{count}</p>
      <div className="btn-circle plus" onClick={increase} />
    </Wrapper>
  );
};

Counter.defaultProps = {
  defaultValue: 1,
};
export default Counter;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
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

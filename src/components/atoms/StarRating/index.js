import React from 'react';
import styled from 'styled-components';
import { ICStar } from '../../../assets/Icons';

const StarRating = () => {
  return (
    <Wrapper>
      <img src={ICStar} />
      <img src={ICStar} />
      <img src={ICStar} />
      <img src={ICStar} />
      <img src={ICStar} />
      <span className="sold">(10)</span>
    </Wrapper>
  );
};

export default StarRating;

const Wrapper = styled.div`
  /* display: flex; */
  /* align-self: flex-start; */
  /* gap: 2px; */
  /* height: 100%; */
  .sold {
    margin-left: 3px;
    color: #9b9b9b;
  }
`;

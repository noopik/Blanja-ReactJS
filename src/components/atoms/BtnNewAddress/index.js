import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Typography';

const BtnNewAddres = ({ onClick }) => {
  return (
    <Wrapper className="btn-wrapper" onClick={onClick}>
      <Heading as={3} className="link">
        Add new address
      </Heading>
    </Wrapper>
  );
};

export default BtnNewAddres;

const Wrapper = styled.div`
  height: 86px;
  border: 2px dashed #9b9b9b;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  .link {
    color: #9b9b9b;
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContentWrapper } from '../styled';

const Button = styled.div`
  font-size: 14px;
  font: inherit;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 48px;
  background-color: ${({ active }) => (active ? '#db3022' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#9b9b9b')};
  border: 1px solid #9b9b9b;
  border: ${({ active }) => {
    if (active) return 0;
  }};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
  .left {
    filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
    border-radius: 4px 0px 0px 4px;
  }

  .left:hover {
  }

  .right {
    border-radius: 0px 4px 4px 0px;
    filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
  }
`;

const ButtonTogller = ({
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  children,
  status,
}) => {
  return (
    <ContentWrapper>
      <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button className="left">Customer</Button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button className="right" active>
            Seller
          </Button>
        </Link>
      </Wrapper>
    </ContentWrapper>
  );
};

export default ButtonTogller;

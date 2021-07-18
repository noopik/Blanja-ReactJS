import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconLogo } from '../index';
import { TitleBrand } from './styled';

const Wrapper = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const index = ({ className, size }) => {
  return (
    <Link to="/" className={`anchor ${className}`}>
      <Wrapper>
        <IconLogo size={size} />
        <TitleBrand>Blanja</TitleBrand>
      </Wrapper>
    </Link>
  );
};

export default index;

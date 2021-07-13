import React from 'react';
import styled from 'styled-components';
import { IconLogo } from '../index';
import { TitleBrand } from './styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const index = () => {
  return (
    <Wrapper>
      <IconLogo />
      <TitleBrand>Blanja</TitleBrand>
    </Wrapper>
  );
};

export default index;

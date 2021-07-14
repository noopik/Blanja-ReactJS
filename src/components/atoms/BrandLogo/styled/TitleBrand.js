import React from 'react';

import styled from 'styled-components';
const TitleBrand = styled.h1`
  color: #db3022;
  font-size: 34px;
  font-family: 'Metropolis-Bold';
  margin-bottom: 0;
`;

const index = ({ children }) => {
  return <TitleBrand>{children}</TitleBrand>;
};

export default index;

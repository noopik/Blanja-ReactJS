import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  /* background-color: yellow; */
  display: flex;
`;

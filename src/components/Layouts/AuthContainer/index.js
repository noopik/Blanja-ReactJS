import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: -40px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 400px;
`;

const index = ({ children }) => {
  return <Container>{children}</Container>;
};

export default index;

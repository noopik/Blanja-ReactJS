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

  .btn-wrapper {
    margin: 26px 40px;
  }

  .text-warning {
    text-align: center;
    margin-top: -16px;
    margin-bottom: 24px;
  }
`;

const index = ({ children }) => {
  return <Container>{children}</Container>;
};

export default index;
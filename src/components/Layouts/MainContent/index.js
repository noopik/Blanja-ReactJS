import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  .carousel {
    margin-top: 50px;
  }
`;

const index = ({ children }) => {
  return <Main className="container">{children}</Main>;
};

export default index;

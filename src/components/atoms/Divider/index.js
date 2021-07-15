import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 2px;
  border: 1px solid #9b9b9b;
`;

const Divider = ({ children, className }) => {
  return <Content className={className}>{children}</Content>;
};

export default Divider;

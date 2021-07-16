import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 2px;
  border: 1px solid #d4d4d4;
`;

const Divider = ({ children, className }) => {
  return <Content className={className}>{children}</Content>;
};

export default Divider;

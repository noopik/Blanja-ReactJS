import React from 'react';
import styled from 'styled-components';

const TabContent = ({ children, title }) => {
  return (
    <Content>
      <h1>{title}</h1>
    </Content>
  );
};

export default TabContent;

const Content = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

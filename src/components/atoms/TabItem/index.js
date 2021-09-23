import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../../Layouts';
import { Heading } from '../Typography';
const TabContent = ({ children, title }) => {
  return (
    <Content>
      <Heading as={2} font="regular">
        {title}
      </Heading>
      {/* <SearchInput className="input-wrapper" placeholder="Find your products" /> */}
      {children}
    </Content>
  );
};

export default TabContent;

const Content = styled.div`
  margin-top: 2rem;
  width: 100%;

  .input-wrapper {
    width: 40%;
    margin-bottom: 1rem;
    ${customMedia.lessThan('751px')`
   
    width: 100%;
  `}

    .wrapper {
      margin: 0;

      .icon-filter {
        display: none;
      }
    }
  }
`;

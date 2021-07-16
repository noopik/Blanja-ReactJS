import React from 'react';
import styled from 'styled-components';
import { DataTable } from '../../molecules';
import SearchInput from '../SearchInput';

const TabContent = ({ children, title }) => {
  return (
    <Content>
      <SearchInput className="input-wrapper" placeholder="Find your products" />
      <DataTable />
      <h1>{title}</h1>
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
    .wrapper {
      margin: 0;

      .icon-filter {
        display: none;
      }
    }
  }
`;

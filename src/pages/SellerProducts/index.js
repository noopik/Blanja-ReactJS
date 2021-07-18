import React, { useEffect, useState } from 'react';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';
import { Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import TabContent from '../../components/atoms/TabItem';
import { DataTable } from '../../components/molecules';
import { Axios } from '../../config';

const SellerProductPage = () => {
  // console.log(dataProduct);

  return (
    <>
      <UserProfilePage
        userName="Seller Diana | Produk"
        active="account"
        session="seller"
      >
        <Main heading="My Products">
          <TabsWrapper defaultActiveKey="all-items">
            <Tab eventKey="all-items" title="All Items">
              <TabContent title="Sold out">
                <DataTable />
              </TabContent>
            </Tab>
            <Tab eventKey="sold-out" title="Sold out">
              <TabContent title="Sold out" />
            </Tab>
            <Tab eventKey="archived" title="Archived">
              <TabContent title="Archived" />
            </Tab>
          </TabsWrapper>
        </Main>
      </UserProfilePage>
    </>
  );
};

export default SellerProductPage;

const TabsWrapper = styled(Tabs)`
  .nav-link {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #9b9b9b;
    &.active {
      color: red;
      border: 0;
      border-bottom: 3px;
      border-style: solid;
      border-color: red;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #db3022;
    }
  }
  .content {
    background-color: pink;
  }
`;

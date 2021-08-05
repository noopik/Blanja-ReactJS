import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import styled from 'styled-components';
import TabContent from '../../components/atoms/TabItem';
import { DataTable, ProductTables } from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';
import { useSelector } from 'react-redux';

const SellerProductPage = () => {
  const userState = useSelector((state) => state.userReducer);

  return (
    <>
      <UserProfilePage active="account" session={userState.role}>
        <Main heading="My Products">
          <TabsWrapper defaultActiveKey="all-items">
            <Tab eventKey="all-items" title="All Items">
              <TabContent title="Sold out">
                {/* <DataTable /> */}
                <ProductTables dataSeller={userState} />
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

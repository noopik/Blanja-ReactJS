import React from 'react';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';
import { Tabs, Tab } from 'react-bootstrap';
import TabContent from '../../components/atoms/TabItem';
import styled from 'styled-components';

const UserProfileOrder = () => {
  return (
    <>
      <UserProfilePage userName="Nopik | Orders" active="order">
        <Main heading="My Orders">
          <TabsWrapper defaultActiveKey="profile">
            <Tab eventKey="home" title="Home">
              <TabContent title="Home" />
            </Tab>
            <Tab eventKey="profile" title="profile">
              <TabContent title="profile" />
            </Tab>
            <Tab eventKey="about" title="about">
              <TabContent title="about" />
            </Tab>
          </TabsWrapper>
        </Main>
      </UserProfilePage>
    </>
  );
};

export default UserProfileOrder;

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

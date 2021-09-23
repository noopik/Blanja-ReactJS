/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';
import { Tabs, Tab } from 'react-bootstrap';
import TabContent from '../../components/atoms/TabItem';
import styled from 'styled-components';
import { OrderTables } from '../../components/molecules';
import { useSelector } from 'react-redux';
import { Axios } from '../../config';

const UserProfileOrder = () => {
  const { userReducer: userState } = useSelector((state) => state);
  const token = localStorage.getItem('token');
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    Axios.get(`/transactions/user/${userState.idUser}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        const responseData = res.data.data;
        setAllData(responseData);
      })
      .catch((err) => {
        console.log('res', err.response);
      });
  }, []);

  return (
    <>
      <UserProfilePage
        userName="Nopik | Orders"
        active="order"
        session="customer"
      >
        <Main heading="My Orders">
          <TabsWrapper defaultActiveKey="all-item">
            <Tab eventKey="all-item" title="All Item">
              <TabContent title="All Item">
                <OrderTables data={allData} />
              </TabContent>
            </Tab>
            <Tab eventKey="profile" title="Get paid">
              <TabContent title="Get paid" />
            </Tab>
            <Tab eventKey="processed" title="Processed">
              <TabContent title="Processed" />
            </Tab>
            <Tab eventKey="get-paid" title="Get paid">
              <TabContent title="Get paid" />
            </Tab>
            <Tab eventKey="sent" title="Sent">
              <TabContent title="Sent" />
            </Tab>
            <Tab eventKey="completed" title="Completed">
              <TabContent title="Completed" />
            </Tab>
            <Tab eventKey="order-cancel" title="Order cancel">
              <TabContent title="Order cancel" />
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

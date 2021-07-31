import React from 'react';
import styled from 'styled-components';
import { BtnNewAddres } from '../../components/atoms';
import { UserAddressCard } from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const UserProfileAddress = () => {
  return (
    <>
      <UserProfilePage
        userName="Nopik | Shipping Address"
        active="address"
        session="customer"
      >
        <Main
          heading="Choose another address"
          subHeading="Manage your shipping address"
        >
          <Content>
            <BtnNewAddres onClick />
            <UserAddressCard />
          </Content>
        </Main>
      </UserProfilePage>
    </>
  );
};

export default UserProfileAddress;

const Content = styled.div`
  /* background-color: pink; */
`;

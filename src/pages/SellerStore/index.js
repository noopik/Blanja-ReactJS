import React from 'react';
import { UserFormSetting } from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const SellerStore = () => {
  return (
    <>
      <UserProfilePage userName="Seller Diana" active="account">
        <Main heading="My Profile Store">
          <UserFormSetting session="seller" />
        </Main>
      </UserProfilePage>
    </>
  );
};

export default SellerStore;

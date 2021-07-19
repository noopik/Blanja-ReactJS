import React from 'react';
import styled from 'styled-components';
import {
  NavbarAsideProfileCollapse,
  UserFormSetting,
} from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const SellerStore = () => {
  let session = 'seller';
  let active = 'account';

  return (
    <>
      <UserProfilePage
        userName="Seller Diana"
        active={active}
        session={session}
      >
        <Main heading="My Profile Store">
          <UserFormSetting session={session} />
        </Main>
      </UserProfilePage>
    </>
  );
};

export default SellerStore;

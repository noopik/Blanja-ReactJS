import React, { useEffect } from 'react';
import { UserFormSetting } from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const UserProfileSetting = () => {
  return (
    <>
      <UserProfilePage userName="Nooopik" active="account" session="customer">
        <Main>
          <UserFormSetting />
        </Main>
      </UserProfilePage>
    </>
  );
};

export default UserProfileSetting;

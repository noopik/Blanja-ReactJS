import React, { useEffect } from 'react';
import { UserFormSetting } from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';
import { useSelector } from 'react-redux';

const UserProfileSetting = () => {
  const userState = useSelector((state) => state.userReducer.data);
  useEffect(() => {
    document.title = userState.name + ' | Setting';
  });
  return (
    <>
      <UserProfilePage active="account" session="customer">
        <Main heading="Profile Dashboard">
          <UserFormSetting session={userState.role} data={userState} />
        </Main>
      </UserProfilePage>
    </>
  );
};

export default UserProfileSetting;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { UserFormSetting } from '../../components/molecules';
import { showLoading } from '../../redux/actions';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const SellerStore = () => {
  let active = 'account';
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.userReducer);

  if (userState.name) {
    dispatch(showLoading(false));
  }

  return (
    <>
      <UserProfilePage active={active} session={userState.role}>
        <Main heading="My Profile Store">
          <UserFormSetting session={userState.role} data={userState} />
        </Main>
      </UserProfilePage>
    </>
  );
};

export default SellerStore;

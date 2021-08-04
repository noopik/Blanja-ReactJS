import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { UserFormSetting } from '../../components/molecules';
import { showLoading } from '../../redux/actions';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const SellerStore = () => {
  let session = 'seller';
  let active = 'account';
  const dispatch = useDispatch();

  const userReducer = useSelector((state) => state.userReducer);

  if (userReducer.name) {
    dispatch(showLoading(false));
  }
  return (
    <>
      <UserProfilePage
        username={userReducer.storeName}
        imageProfile={userReducer.image}
        active={active}
        session={session}
      >
        <Main heading="My Profile Store">
          <UserFormSetting
            session={session}
            username={userReducer.storeName}
            imageProfile={userReducer.image}
            {...userReducer}
          />
        </Main>
      </UserProfilePage>
    </>
  );
};

export default SellerStore;

import React, { useState } from 'react';
import styled from 'styled-components';
import { BtnNewAddres } from '../../components/atoms';
import {
  UserAddressCard,
  Modal,
  ModalChooseAddress,
} from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const UserProfileAddress = () => {
  const [showModalAddress, setShowModalAddress] = useState(false);

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
            <BtnNewAddres onClick={() => setShowModalAddress(true)} />
            <UserAddressCard />
          </Content>
        </Main>
      </UserProfilePage>
      <Modal
        showModal={showModalAddress}
        closeModal={() => setShowModalAddress(false)}
        title="Choose Another Address"
        size="large"
      >
        <ModalChooseAddress />
      </Modal>
    </>
  );
};

export default UserProfileAddress;

const Content = styled.div`
  /* background-color: pink; */
`;

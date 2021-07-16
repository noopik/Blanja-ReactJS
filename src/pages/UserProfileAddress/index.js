import React from 'react';
import styled from 'styled-components';
import { BtnNewAddres, Button } from '../../components/atoms';
import { Heading, Text } from '../../components/atoms/Typography';
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
            <div className="detail-address">
              <Heading as={2} className="username">
                Addreas Jane
              </Heading>
              <Text as="lg" color="secondary">
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </Text>
              <Button className="btn-action" type="link" primary>
                Change Address
              </Button>
            </div>
          </Content>
        </Main>
      </UserProfilePage>
    </>
  );
};

export default UserProfileAddress;

const Content = styled.div`
  /* background-color: pink; */

  .detail-address {
    border: 1px solid #db3022;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 30px 25px;
    margin-top: 2rem;

    .btn-action {
      display: block;
      margin-top: 1rem;
      font-size: 16px;
      font-weight: 600;
      padding: 0;

      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
`;

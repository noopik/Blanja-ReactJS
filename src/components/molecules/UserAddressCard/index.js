import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';

const UserAddressCard = ({ onClick }) => {
  return (
    <Wrapper>
      <Heading as={2} className="username">
        Addreas Janea
      </Heading>
      <Text as="lg" color="secondary">
        Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
        Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab.
        Banyumas, 53181
      </Text>
      <Button className="btn-action" type="link" onClick={onClick} primary>
        Change Address
      </Button>
    </Wrapper>
  );
};

export default UserAddressCard;

const Wrapper = styled.div`
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
`;

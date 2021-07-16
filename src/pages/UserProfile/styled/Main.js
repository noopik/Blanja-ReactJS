import React from 'react';
import styled from 'styled-components';
import { ProfileUser } from '../../../assets/images';
import {
  Button,
  CardWrapper,
  Divider,
  FormInput,
} from '../../../components/atoms';
import { Heading, Text } from '../../../components/atoms/Typography';

const Main = ({ children, heading, subHeading }) => {
  return (
    <Wrapper>
      <CardWrapper className="card-wrapper">
        {/* HEADING */}
        <Heading as={2}>{heading ? heading : 'Heading Page'}</Heading>
        <Text as="lg" color="secondary">
          {subHeading ? subHeading : 'Manage your profile information'}
        </Text>
        <Divider className="my-4" />
        {/* CONTENT */}
        <div className="avatar-wrapper">{children}</div>
      </CardWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  /* background: #f5f5f5;
  padding: 40px;
  width: 75%;
  padding-top: 150px; */
  /* display: flex; */
  /* flex-direction: row; */
  .card-wrapper {
    width: 80%;
    height: 90%;
    padding-bottom: 60px;
  }
  .avatar-wrapper {
    /* display: flex; */
  }
`;

import React, { useEffect } from 'react';
import { MainContent } from '../../components/Layouts';
import { Navbar } from '../../components/molecules';
import { Aside, Container } from './styled';

const UserProfile = () => {
  useEffect(() => {
    document.title = 'Joe Tama';
  });

  return (
    <>
      <Navbar session="user" />
      <Container>
        <Aside />
      </Container>
    </>
  );
};

export default UserProfile;

import React, { useEffect } from 'react';
import { Navbar, UserFormSetting } from '../../components/molecules';
import { Aside, Container, Main, MainAside } from './styled';

const UserProfile = ({ userName, children, active }) => {
  useEffect(() => {
    document.title = userName;
  });

  return (
    <>
      <Navbar session="user" />
      <Container>
        <Aside active={active} />
        <MainAside>{children}</MainAside>
      </Container>
    </>
  );
};

export default UserProfile;

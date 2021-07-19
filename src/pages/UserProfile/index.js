import React, { useEffect } from 'react';
import {
  Navbar,
  NavbarAsideProfileCollapse,
  UserFormSetting,
} from '../../components/molecules';
import { Aside, Container, Main, MainAside } from './styled';

const UserProfile = ({ userName, children, active, session }) => {
  useEffect(() => {
    document.title = userName;
  });

  return (
    <>
      <Navbar session={session} />
      <Container>
        <Aside active={active} session={session} />
        <MainAside>{children}</MainAside>
        <NavbarAsideProfileCollapse session={session} />
      </Container>
    </>
  );
};

export default UserProfile;

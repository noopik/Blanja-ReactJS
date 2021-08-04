import React, { useEffect } from 'react';
import { Navbar, NavbarAsideProfileCollapse } from '../../components/molecules';
import { Aside, Container, MainAside } from './styled';

const UserProfile = ({ username, children, active, session, imageProfile }) => {
  useEffect(() => {
    document.title = username + ' | Blanja.com';
  });

  return (
    <>
      <Navbar session={session} />
      <Container>
        <Aside
          active={active}
          session={session}
          username={username}
          imageProfile={imageProfile}
        />
        <MainAside>{children}</MainAside>
        <NavbarAsideProfileCollapse session={session} />
      </Container>
    </>
  );
};

export default UserProfile;

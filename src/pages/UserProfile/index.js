import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, NavbarAsideProfileCollapse } from '../../components/molecules';
import { Aside, Container, MainAside } from './styled';

const UserProfile = ({ children, active, session }) => {
  const userState = useSelector((state) => state.userReducer.data);
  useEffect(() => {
    document.title = 'Blanja + ' + userState.name;
  });

  return (
    <>
      <Navbar session={session} />
      <Container>
        <Aside
          active={active}
          session={session}
          username={userState.name}
          imageProfile={userState.imageUrl}
        />
        <MainAside>{children}</MainAside>
        <NavbarAsideProfileCollapse session={session} />
      </Container>
    </>
  );
};

export default UserProfile;

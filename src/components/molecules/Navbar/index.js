import React from 'react';
import styled from 'styled-components';
import {} from '../../molecules';
import { BrandLogo, SearchInput } from '../../atoms';
import {} from '../../atoms/Typography';
import { Navbar, Wrapper } from './styled';
import PublicNav from './styled/PublicNav';
import UserNav from './styled/UserNav';

const NavbarComponent = ({ onChange, value, session }) => {
  return (
    <Navbar>
      <Wrapper className="container">
        <BrandLogo className="logo-brand" size={40} />
        <SearchInput onChange={onChange} value={value} session={session} />
        {session === 'public' && <PublicNav />}
        {session === 'user' || (session === 'seller' && <UserNav />)}
      </Wrapper>
    </Navbar>
  );
};

export default NavbarComponent;

NavbarComponent.defaultProps = {
  session: 'public',
};

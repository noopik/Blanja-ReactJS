import React from 'react';
import styled from 'styled-components';

const NavbarMain = styled.nav`
  background-color: white;
  width: 100vw;
  box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
  position: fixed;
  top: 0;
  z-index: 99;

  .logo-brand {
    height: 40px;
  }

  .yellow {
    background-color: yellow;
  }
`;

const Navbar = ({ children }) => {
  return <NavbarMain>{children}</NavbarMain>;
};

export default Navbar;

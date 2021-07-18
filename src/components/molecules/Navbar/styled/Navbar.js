import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../../../Layouts';

const NavbarMain = styled.nav`
  background-color: white;
  ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    background-color: yellow; 
  `}
  ${customMedia.lessThan('tablet')`
    /* for screen sizes less than 768px */
    background-color: cyan; 
  `}
  ${customMedia.lessThan('mobile')`
    /* for screen sizes less than 481px */
    background-color: pink; 
  `}
  ${customMedia.lessThan('minimobile')`
    /* for screen sizes less than 320px */
    background-color: green; 
  `}
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

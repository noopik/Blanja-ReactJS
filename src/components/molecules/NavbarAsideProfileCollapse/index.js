import React, { useState } from 'react';
import styled from 'styled-components';
import { customMedia } from '../../Layouts';
import NavCustomerAside from '../NavCustomerAside';
import NavSellerAside from '../NavSeller';

const NavbarAsideProfileCollapse = ({ onClick, session, active }) => {
  const [show, setShow] = useState(false);

  const handleShowNav = () => {
    show === false ? setShow(true) : setShow(false);
  };

  return (
    <NavbarCollapse showOnClick={show}>
      <div className="nav-open" onClick={handleShowNav}>
        <svg viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5558 6H3.4158L4.7158 4.71C4.9041 4.5217 5.00989 4.2663 5.00989 4C5.00989 3.7337 4.9041 3.47831 4.7158 3.29C4.52749 3.1017 4.2721 2.99591 4.0058 2.99591C3.7395 2.99591 3.4841 3.1017 3.2958 3.29L0.295798 6.29C0.20207 6.38297 0.127676 6.49357 0.0769069 6.61543C0.0261382 6.73728 0 6.86799 0 7C0 7.13201 0.0261382 7.26272 0.0769069 7.38458C0.127676 7.50644 0.20207 7.61704 0.295798 7.71L3.2958 10.71C3.38876 10.8037 3.49936 10.8781 3.62122 10.9289C3.74308 10.9797 3.87379 11.0058 4.0058 11.0058C4.13781 11.0058 4.26852 10.9797 4.39038 10.9289C4.51223 10.8781 4.62284 10.8037 4.7158 10.71C4.80953 10.617 4.88392 10.5064 4.93469 10.3846C4.98546 10.2627 5.0116 10.132 5.0116 10C5.0116 9.86799 4.98546 9.73728 4.93469 9.61543C4.88392 9.49357 4.80953 9.38297 4.7158 9.29L3.4158 8H17.5558C17.8038 7.98788 18.0385 7.8839 18.2141 7.7083C18.3897 7.5327 18.4937 7.29804 18.5058 7.05V7C18.5061 6.74323 18.4077 6.49616 18.2308 6.31C18.0539 6.12384 17.8123 6.01284 17.5558 6V6Z"
            fill="#9B9B9B"
          />
          <path
            d="M17.5559 12H1.45586C0.931189 12 0.505859 12.4253 0.505859 12.95V13.05C0.505859 13.5747 0.931189 14 1.45586 14H17.5559C18.0805 14 18.5059 13.5747 18.5059 13.05V12.95C18.5059 12.4253 18.0805 12 17.5559 12Z"
            fill="#9B9B9B"
          />
          <path
            d="M17.5559 0H1.45586C0.931189 0 0.505859 0.425329 0.505859 0.95V1.05C0.505859 1.57467 0.931189 2 1.45586 2H17.5559C18.0805 2 18.5059 1.57467 18.5059 1.05V0.95C18.5059 0.425329 18.0805 0 17.5559 0Z"
            fill="#9B9B9B"
          />
        </svg>
      </div>
      {session === 'customer' && (
        <div className="content">
          <NavCustomerAside />
        </div>
      )}
      {session === 'seller' && (
        <div className="content">
          <NavSellerAside active={active} />
        </div>
      )}
    </NavbarCollapse>
  );
};

export default NavbarAsideProfileCollapse;

const NavbarCollapse = styled.div`
  display: none;
  background-color: white;
  box-shadow: 5px 0px 10px 2px rgba(34, 34, 34, 0.29);
  position: fixed;
  height: 100vh;
  width: 40vw;
  z-index: 999;
  /* margin-top: 100px; */
  top: 0;
  left: 0;
  transition-duration: 2000ms;
  transform: ${({ showOnClick }) =>
    showOnClick ? 'translateX(0vw)' : 'translateX(-40vw)'};
  ${customMedia.lessThan('940px')`
    // background-color: yellow; 
    display: block; 
  `}
  /* Toggler open */

  .nav-open {
    width: 32px;
    height: 64px;
    display: flex;
    background-color: white;
    top: 8rem;
    padding: 8px;
    box-sizing: content-box;
    /* transform: rotate(180deg); */
    position: absolute;
    border-radius: 0 5px 5px 0;
    right: -45px;
    svg {
      transform: ${({ showOnClick }) =>
        showOnClick ? 'rotate(0deg)' : 'rotate(180deg)'};
    }
  }
  /* Content */
  .content {
    width: 80%;
    margin: 2rem auto;
  }
`;

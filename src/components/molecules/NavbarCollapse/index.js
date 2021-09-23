import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { userLogout } from '../../../redux/actions';
import { Button } from '../../atoms';
import { customMedia } from '../../Layouts';

const NavbarCollapse = ({ session }) => {
  const navState = useSelector((state) => state.navReducer);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const { isShow } = navState;
  const handleShowNav = () => {
    dispatch({ type: 'SET_NAVCOLLAPSE', value: false });
  };
  const history = useHistory();
  const userState = useSelector((state) => state.userReducer);

  const actionLogout = () => {
    dispatch(userLogout(history));
    history.push('/customer-login');
  };
  const handleProfile = () => {
    handleShowNav();
    if (userState.role === 'customer') {
      history.push('/user/setting');
    }
    if (userState.role === 'seller') {
      history.push('/admin/seller');
    }
  };
  return (
    <>
      <NavbarCollapseWrapper showOnClick={isShow}>
        <div className="header">
          <Link to="/my-bag" className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  stroke="#9B9B9B"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  stroke="#9B9B9B"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                  stroke="#9B9B9B"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          {!token && (
            <>
              <Link to="/customer-login" className="prefix">
                <ButtonNav primary className="btn">
                  Login
                </ButtonNav>
              </Link>
              <Link to="/seller-login">
                <ButtonNav className="btn">Signup</ButtonNav>
              </Link>
            </>
          )}
          {token && (
            <>
              <div onClick={handleProfile}>
                <ButtonNav primary className="btn">
                  Profile
                </ButtonNav>
              </div>
              <div onClick={actionLogout}>
                <ButtonNav className="btn">Logout</ButtonNav>
              </div>
            </>
          )}
          <div className="icon arrow" onClick={handleShowNav}>
            <svg
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
        </div>
        <div className="body">
          <Link to="/categories">Category</Link>
          <Link to="/my-bag">My Bag</Link>
          <Link to="/user/setting">Profile</Link>
        </div>
      </NavbarCollapseWrapper>
      <BgLayer showOnClick={isShow} onClick={handleShowNav} />
    </>
  );
};

export default NavbarCollapse;

const ButtonNav = styled(Button)`
  width: 100px;
  margin-left: 1rem;
`;

const NavbarCollapseWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 14px rgba(173, 173, 173, 0.25);
  border-radius: 10px 0 0 10px;
  position: absolute;
  padding: 2rem 1.4rem;
  top: 0;
  width: 50%;
  height: 100vh;
  z-index: 99;
  transition-duration: 1.5s;
  transform: ${({ showOnClick }) =>
    showOnClick ? 'translateX(46vw)' : 'translateX(120vw)'};
  ${customMedia.lessThan('770px')`
    transform: ${({ showOnClick }) =>
      showOnClick ? 'translateX(50vw)' : 'translateX(120vw)'};
  `}
  ${customMedia.lessThan('580px')`
    transform: ${({ showOnClick }) =>
      showOnClick ? 'translateX(48vw)' : 'translateX(120vw)'};
  `} 
  .header {
    /* background-color: yellow; */
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
    ${customMedia.lessThan('580px')`
      flex-direction: column; 
    `}
  }
  .body {
    a {
      color: #222222;
      text-decoration: none;
      display: block;
      font-size: 1.4rem;
      margin-bottom: 0.4rem;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  .icon {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.arrow {
      display: none;
      transform: rotate(180deg);
      background-color: white;
      border-radius: 0 10px 10px 0;
      left: -63px;
      width: 65px;
      height: 40px;
      svg {
        width: 32px;
      }
    }
  }
  .btn {
    margin-left: 0;
    ${customMedia.lessThan('580px')`
      width: 100%;
    `}
  }
`;

const BgLayer = styled.div`
  display: ${({ showOnClick }) => (showOnClick ? 'block' : 'none')};

  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #0000004c;
  left: 0;
  top: 0;
`;

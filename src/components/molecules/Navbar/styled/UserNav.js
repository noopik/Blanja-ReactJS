import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../assets/colors';
import { userLogout } from '../../../../redux/actions';
import { Button } from '../../../atoms';
import { customMedia } from '../../../Layouts';

const UserNav = ({ avatar }) => {
  const [showAvatarPopup, setShowAvatarPopup] = useState(false);
  const userState = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const handlePopup = () => {
    showAvatarPopup ? setShowAvatarPopup(false) : setShowAvatarPopup(true);
  };
  const handleProfile = () => {
    if (userState.role === 'customer') {
      history.push('/user/setting');
    }
    if (userState.role === 'seller') {
      history.push('/admin/seller');
    }
  };

  const actionLogout = () => {
    dispatch(userLogout(history));
    history.push('/customer-login');
  };

  return (
    <Wrapper>
      <Link to="/my-bag" className="icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="#9B9B9B"
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="#9B9B9B"
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="#9B9B9B"
              stroke-width="2.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Link to="#" className="icon">
        <svg
          class="stroke"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
            stroke="#9B9B9B"
            stroke-width="2.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21"
            stroke="#9B9B9B"
            stroke-width="2.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <Link to="#" className="icon">
        <svg
          class="stroke"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke="#9B9B9B"
            stroke-width="2.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 6L12 13L2 6"
            stroke="#9B9B9B"
            stroke-width="2.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <div className="btn-avatar" onClick={handlePopup}>
        <div className="icon user">
          <img src={userState.image} alt="user" />
        </div>
        {showAvatarPopup && (
          <div className="popup">
            <div className="item">
              <a onClick={handleProfile}>My Profile</a>
            </div>
            <div className="item">
              <Button primary onClick={actionLogout}>
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default UserNav;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  ${customMedia.lessThan('865px')`
      /* for screen sizes less than 768px */
      display: none;
  `}

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    /* background-color: yellow; */
    &.user img {
      content: '';
      width: 35px;
      height: 35px;
      border-radius: 100%;
    }
  }
  .icon:hover {
    cursor: pointer;
  }
  .icon:hover svg path {
    stroke: ${colors.primary};
  }

  .btn-avatar {
    position: relative;

    .popup {
      position: absolute;
      background-color: #ffffff;
      box-shadow: 0px 0px 14px rgba(173, 173, 173, 0.25);
      right: 15px;
      top: 30px;
      width: 150px;
      margin-top: 1rem;
      padding: 12px;
      padding-bottom: 5px;
      border-radius: 15px 0 15px 15px;
      .item {
        margin-bottom: 1rem;
        a {
          color: #222222;
          text-decoration: none;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

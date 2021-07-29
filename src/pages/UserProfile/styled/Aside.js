import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProfileUser } from '../../../assets/images';
import { customMedia } from '../../../components/Layouts';
import {
  NavCustomerAside,
  NavSellerAside,
} from '../../../components/molecules';

const Aside = ({ active, session }) => {
  return (
    <Wrapper>
      <div className="content">
        <div className="user-profile-wrapper">
          <img className="avatar" src={ProfileUser} alt="johanness " />
          <div className="username-wrapper">
            <h3>Johannes Mikael</h3>
            <Link to={``} className="anchor">
              <div className="edit-profile-wrapper">
                <svg
                  width=" 16 "
                  height=" 16 "
                  viewBox=" 0 0 16 16 "
                  fill=" none "
                  xmlns=" http://www.w3.org/2000/svg "
                >
                  <path
                    d=" M0 12.6662V16H3.33379L13.1707 6.16302L9.8369 2.82922L0 12.6662Z "
                    fill=" #9B9B9B "
                  />
                  <path
                    d=" M15.74 2.33586L13.6642 0.260036C13.3174 -0.0866786 12.7529 -0.0866786 12.4062 0.260036L10.7793 1.88693L14.1131 5.22072L15.74 3.59383C16.0867 3.24711 16.0867 2.68258 15.74 2.33586Z "
                    fill=" #9B9B9B "
                  />
                </svg>
                <p className="text secondary">Ubah profile</p>
              </div>
            </Link>
          </div>
        </div>
        {session === 'customer' && <NavCustomerAside />}
        {session === 'seller' && <NavSellerAside active={active} />}
      </div>
    </Wrapper>
  );
};

export default Aside;

const Wrapper = styled.aside`
  /* background: #d40000; */
  padding-top: 150px;
  padding-right: 25px;
  width: 27%;
  height: 100vh;
  /* z-index: 9; */
  display: flex;
  justify-content: flex-end;
  /* justify-content: flex-end; */
  ${customMedia.lessThan('940px')`
    // background-color: pink; 
    transform: translateX(-100vw);
    width: 0;
    padding-right: 0;
  `}

  /* background-color: cyan; */

.content {
    /* background-color: cyan; */
    width: max-content;
    position: fixed;

    /* START = USER PROFILE AVATAR */
    .user-profile-wrapper {
      display: flex;
      width: max-content;
      margin-bottom: 2rem;
      .avatar {
        width: 60px;
        height: 60px;
      }
      .username-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 13px;

        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #222222;
          margin-bottom: 0;
        }
        .edit-profile-wrapper {
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          color: #9b9b9b;
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
          svg {
            width: 16px;
            height: 16px;
          }
          p {
            margin: 0;
          }
        }
      }
      /* END = USER PROFILE AVATAR */
    }
  }
`;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavCustomerAside = ({ active }) => {
  return (
    <Wrapper>
      <div class="menu-wrapper">
        <Link to={`/user/setting`} className="anchor">
          <div class="icon-wrapper blue">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 14V12.6667C13.3334 11.9594 13.0525 11.2811 12.5524 10.781C12.0523 10.281 11.374 10 10.6667 10H5.33341C4.62617 10 3.94789 10.281 3.4478 10.781C2.9477 11.2811 2.66675 11.9594 2.66675 12.6667V14"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={`text ${active === 'account' && 'active'}`}>
            My Account
          </p>
        </Link>
      </div>
      <div class="menu-wrapper">
        <Link to={`/user/shipping-address`} className="anchor">
          <div class="icon-wrapper orange">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={`text ${active === 'address' && 'active'}`}>
            Shipping Adrress
          </p>
        </Link>
      </div>
      <div class="menu-wrapper">
        <Link to={`/user/orders`} className="anchor">
          <div class="icon-wrapper pink">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 2.66663H12.0001C12.3537 2.66663 12.6928 2.8071 12.9429 3.05715C13.1929 3.3072 13.3334 3.64634 13.3334 3.99996V13.3333C13.3334 13.6869 13.1929 14.0261 12.9429 14.2761C12.6928 14.5262 12.3537 14.6666 12.0001 14.6666H4.00008C3.64646 14.6666 3.30732 14.5262 3.05727 14.2761C2.80722 14.0261 2.66675 13.6869 2.66675 13.3333V3.99996C2.66675 3.64634 2.80722 3.3072 3.05727 3.05715C3.30732 2.8071 3.64646 2.66663 4.00008 2.66663H5.33341"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99992 1.33337H5.99992C5.63173 1.33337 5.33325 1.63185 5.33325 2.00004V3.33337C5.33325 3.70156 5.63173 4.00004 5.99992 4.00004H9.99992C10.3681 4.00004 10.6666 3.70156 10.6666 3.33337V2.00004C10.6666 1.63185 10.3681 1.33337 9.99992 1.33337Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={`text ${active === 'order' && 'active'}`}>My order</p>
        </Link>
      </div>
    </Wrapper>
  );
};

export default NavCustomerAside;

const Wrapper = styled.div`
  /* MENU WRAPPER*/
  /* background-color: yellow; */
  margin-top: 32px;
  margin-bottom: 1px;
  .anchor {
    display: flex;
    text-decoration: none;
    color: #9b9b9b;
    width: 80%;
    margin-bottom: 1rem;

    &:hover {
      cursor: pointer;
      box-sizing: border-box;
      background-color: #d4d4d4;
      padding: 4px px;
      border-radius: 10px;
      filter: drop-shadow(0px 1px 8px #8f8c8c70);
    }

    .text {
      margin: 0;
      display: flex;
      align-items: center;
      &.active {
        color: #222222;
        font-weight: 700;
      }
    }

    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 14px;
    }

    .orange {
      background-color: #f36f45;
    }
    .blue {
      background-color: blue;
    }
    .pink {
      background: #f3456f;
    }
  }
`;

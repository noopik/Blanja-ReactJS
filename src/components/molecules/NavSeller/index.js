import React from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ListIcon from '@material-ui/icons/List';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICMenuAside } from '../../../assets/Icons';
import { customMedia } from '../../Layouts';

const NavSellerAside = ({ active }) => {
  return (
    <Wrapper className="nav-seller-wrapper">
      {/* ============ */}
      <div class="menu-wrapper">
        <a
          class="anchor"
          data-bs-toggle="collapse"
          href="#storeMenu"
          role="button"
          aria-expanded="false"
          aria-controls="storeMenu"
        >
          <div className="d-flex">
            <div class="icon-arrow left blue">
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
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className={`text ${active === 'account' && 'active'}`}>Store</p>
          </div>
          <div className="icon-arrow right">
            <img src={ICMenuAside} className="icon-collapse" alt="icon" />
          </div>
        </a>
        <div class="collapse" id="storeMenu">
          <div class="card card-body">
            <Link className="link" to="/admin/seller">
              Store Profile
            </Link>
          </div>
        </div>
      </div>
      {/* ============= */}
      <div class="menu-wrapper">
        <a
          class="anchor"
          data-bs-toggle="collapse"
          href="#productsMenu"
          role="button"
          aria-expanded="false"
          aria-controls="productsMenu"
        >
          <div className="d-flex">
            <div class="icon-arrow left orange">
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
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className={`text ${active === 'account' && 'active'}`}>
              Products
            </p>
          </div>
          <div className="icon-arrow right">
            <img src={ICMenuAside} alt="icon" className="icon-collapse" />
          </div>
        </a>
        <div class="collapse" id="productsMenu">
          <div class="card card-body">
            <Link className="link" to="/admin/seller/products">
              My Products
            </Link>
            <Link className="link" to="/admin/seller/selling">
              Selling Products
            </Link>
          </div>
        </div>
      </div>
      {/* ============= */}
      <div class="menu-wrapper">
        <a
          class="anchor"
          data-bs-toggle="collapse"
          href="#orderMenu"
          role="button"
          aria-expanded="false"
          aria-controls="orderMenu"
        >
          <div className="d-flex">
            <div class="icon-arrow left red">
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
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className={`text ${active === 'account' && 'active'}`}>Order</p>
          </div>
          <div className="icon-arrow right">
            <img src={ICMenuAside} className="icon-collapse" alt="icon" />
          </div>
        </a>
        <div class="collapse" id="orderMenu">
          <div class="card card-body">
            <Link className="link" to="#">
              My Order
            </Link>
            <Link className="link" to="#">
              Order Cancel
            </Link>
          </div>
        </div>
      </div>
      {/* ============= */}
    </Wrapper>
  );
};

export default NavSellerAside;

const Wrapper = styled.div`
  /* START = NAVSELLER WRAPPER */
  &.nav-seller-wrapper {
    /* background-color: yellow; */
    .menu-wrapper {
      /* background-color: pink; */
      margin-bottom: 1rem;
      .anchor {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .icon-arrow {
          /* background-color: yellowgreen; */
          &.right {
            ${customMedia.lessThan('550px')`
              display: none; 
            `}
          }
          border-radius: 100%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          .icon-collapse {
            width: 24px;
            height: 24px;
          }
        }
        .text {
          height: 100%;
          padding: 0;
          margin-bottom: 0;
          margin-left: 1rem;
          margin-top: 6px;
          /* font-size: 20px; */
          font-weight: 600;
          color: #9b9b9b;
        }
      }
    }
    .collapse {
      /* background-color: yellow; */
      /* margin-top: 1rem; */
      margin-top: 10px;
      a.link {
        text-decoration: none;
        color: #222222;
      }
    }
  }
  /* END = NAVSELLER WRAPPER */
`;

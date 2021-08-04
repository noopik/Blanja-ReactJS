import React from 'react';
import styled from 'styled-components';
import { CardWrapper, Divider } from '../../../components/atoms';
import { Heading, Text } from '../../../components/atoms/Typography';
import { customMedia } from '../../../components/Layouts';

const Main = ({ children, heading, subHeading, className }) => {
  return (
    <Wrapper className={className}>
      <CardWrapper className="card-wrapper">
        {/* HEADING */}
        <Heading as={2}>{heading ? heading : 'Heading Page'}</Heading>
        <Text as="lg" color="secondary">
          {subHeading ? subHeading : 'Manage your profile information'}
        </Text>
        <Divider className="my-4" />
        {/* CONTENT */}
        <div className="content">{children}</div>
      </CardWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  /* background: #f5f5f5;
  padding: 40px;
  width: 75%;
  padding-top: 150px; */
  /* display: flex; */
  /* flex-direction: row; */
  .card-wrapper {
    width: 80%;
    height: 90%;
    ${customMedia.lessThan('1300px')`
    width: 90%;
    `}
    ${customMedia.lessThan('1000px')`
    width: 100%;
    .input {
      width: 100%;
    }
  `}
  }
  .content {
    margin-bottom: 60px;
    /* display: flex; */
  }
  /* START = Page SellerSellingProducts */
  .form-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    .input-wrapper {
      .form-select {
        /* background-color: cyan; */
        width: 400px;
        ${customMedia.lessThan('1300px')`
          width: 100%;
        `}
      }
      .input {
        /* background-color: yellow; */
        ${customMedia.lessThan('1300px')`
          width: 100%;
        `}
      }
    }
    /* background-color: red; */
  }
  label.title-form {
    margin-right: 1rem;
  }
  &.inventory-wrapper {
    margin-bottom: 2rem;
    .content {
      margin-bottom: 0;
      label {
        margin-bottom: 1rem;
      }
    }
  }
  &.item-details {
    margin-bottom: 2rem;
    .content {
      margin-bottom: 0;

      .form-wrapper {
        /* background-color: yellow; */
        margin-bottom: 1rem;
        label {
          margin-bottom: 14px;
        }
        &.selected {
          /* background-color: pink; */
          .radio-wrapper {
            /* background-color: red; */
            display: flex;
            gap: 1rem;
            .item-radio {
              /* background-color: yellow; */
              display: flex;
              justify-content: center;
              align-items: center;
              color: #9b9b9b;
              label {
                margin: 0;
                margin-left: 1rem;
                &:hover {
                  opacity: 0.6;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
  .photos {
    display: flex;
    justify-content: center;
  }
  &.photos {
    margin-bottom: 2rem;
    .photo-wrapper {
      display: flex;
      flex-flow: wrap;
      gap: 1rem;
      /* justify-content: center; */
      .photo {
        /* background-color: yellow; */
        height: 200px;
        width: 200px;
        border-radius: 25px;
        display: flex;
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
    /* DIBAWAH INI MASIH BELUM TERPAKAI */
    .content {
      margin-bottom: 0;
      .content-upload {
        .img-wrapper {
          display: flex;
          height: max-content;
          gap: 1rem;
          .img-item {
            height: max-content;

            .img {
              width: 190px;
              height: 190px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: gray;
              border-radius: 20px;
            }
          }
        }
      }
      .divider {
        margin: 1rem 0;
        margin-bottom: 2rem;
      }
      .btn-wrapper {
        display: flex;
        justify-content: center;
        .btn {
          .btn-input {
            padding: 8px 12px;
            border-radius: 10px;
            border: 1px solid #9b9b9b;
            &:hover {
              opacity: 0.5;
            }
          }
          input {
          }
          width: 50%;
        }
      }
    }
  }
  /* END = Page SellerSellingProducts */
`;

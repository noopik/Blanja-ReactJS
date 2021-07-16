import React from 'react';
import styled from 'styled-components';
import { ProfileUser } from '../../../assets/images';
import {
  Button,
  CardWrapper,
  Divider,
  FormInput,
} from '../../../components/atoms';
import { Heading, Text } from '../../../components/atoms/Typography';

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
  }
  .content {
    margin-bottom: 60px;
    /* display: flex; */
  }
  /* START = Page SellerSellingProducts */
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
  &.photos {
    margin-bottom: 2rem;
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
          width: 50%;
        }
      }
    }
  }
  /* END = Page SellerSellingProducts */
`;

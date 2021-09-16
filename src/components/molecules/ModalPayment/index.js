import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import {
  BankGopay,
  BankMastercard,
  BankPosIndonesia,
} from '../../../assets/images';
import { moneyFormatter } from '../../../utils';
import { Button, Divider, InputCheck, Toast } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';

const ModalPayment = () => {
  const { cartReducer: cartState } = useSelector((state) => state);
  const history = useHistory();

  return (
    <>
      <WrapperModal>
        <div className="method">
          <Text as="lg" font="medium">
            Payment method
          </Text>
          <div className="bank">
            <div className="iconBank">
              <img src={BankGopay} alt="gopay" />
            </div>
            <div className="nameBank">
              <Heading as={2}>Gopay</Heading>
            </div>
            <div className="checkbox">
              <InputCheck />
            </div>
          </div>
          <div className="bank">
            <div className="iconBank">
              <img src={BankPosIndonesia} alt="gopay" />
            </div>
            <div className="nameBank">
              <Heading as={2}>Pos Indonesia</Heading>
            </div>
            <div className="checkbox">
              <InputCheck />
            </div>
          </div>
          <div className="bank">
            <div className="iconBank">
              <img src={BankMastercard} alt="gopay" />
            </div>
            <div className="nameBank">
              <Heading as={2}>Mastercard</Heading>
            </div>
            <div className="checkbox">
              <InputCheck />
            </div>
          </div>
        </div>
        <Divider className="divider" />
        <div className="summary">
          <Text as="lg" font="medium" className="titleSection">
            Shopping summary
          </Text>
          <div className="row">
            <Text className="text" as="lg">
              Order
            </Text>
            <Text className="text" as="lg" font="bold">
              $ {moneyFormatter.format(cartState?.pricing.totalPrice)}
            </Text>
          </div>
          <div className="row">
            <Text className="text" as="lg">
              Delivery
            </Text>
            <Text className="text" as="lg" font="bold">
              $ {moneyFormatter.format(cartState?.pricing.deliveryPrice)}
            </Text>
          </div>
        </div>
        <div className="footer">
          <div className="total">
            <Text as="lg" font="medium">
              Shooping Summary
            </Text>
            <Text as="lg" font="bold" color="primary" className="totalPrice">
              $.{' '}
              {moneyFormatter.format(
                cartState?.pricing.totalPrice - cartState?.pricing.deliveryPrice
              )}
            </Text>
          </div>
          <Button
            primary
            className="btn-action"
            onClick={() => {
              Toast(
                `Thank you for ordering. Your order is being processed.
              Have a nice day`,
                'success'
              );
              history.push('/');
            }}
          >
            Buy
          </Button>
        </div>
      </WrapperModal>
    </>
  );
};

export default ModalPayment;

const WrapperModal = styled.div`
  margin-top: 1rem;
  box-sizing: content-box;
  .method {
    padding: 1rem;
    .bank {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      .checkbox {
        width: 30px;
      }
      .nameBank {
        width: 50%;
      }
      .iconBank {
        max-width: 30px;
      }
    }
  }
  .divider {
    margin: 1rem 0;
  }
  .summary {
    padding: 1rem;
    padding-top: 0;
    .row {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      .text {
        width: max-content;
      }
    }
  }
  .footer {
    box-shadow: 0px -8px 10px rgba(217, 217, 217, 0.25);
    border-radius: 0px 0px 8px 8px;
    display: flex;
    padding: 1rem;
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
    .total {
      display: flex;
      flex-direction: column;
      .totalPrice {
        font-size: 32px;
      }
    }
    .btn-action {
      width: 200px;
      height: 40px;
    }
  }
`;

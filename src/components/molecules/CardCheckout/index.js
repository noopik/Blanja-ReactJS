import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../../utils';
import { Button, CardWrapper, Divider } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';

const CardCheckout = ({ myBag, checkout, buyAction, pricing }) => {
  return (
    <CardWrapper>
      <Heading as={3}>Shopping summary</Heading>
      {myBag && (
        <div className="d-flex justify-content-between mb-4">
          <Text as="lg">Total price </Text>
          <Text as="lg" font="medium" display="flex" justifyContent="flex-end">
            Rp. {moneyFormatter.format(pricing.totalPrice)}
          </Text>
        </div>
      )}
      {checkout && (
        <>
          <div className="d-flex justify-content-between mb-2">
            <Text as="lg" color="secondary">
              Order
            </Text>
            <Text as="lg" font="bold" display="flex" justifyContent="flex-end">
              Rp. {moneyFormatter.format(pricing.totalPrice)}
            </Text>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <Text as="lg" color="secondary">
              Delivery
            </Text>
            <Text as="lg" font="bold" display="flex" justifyContent="flex-end">
              Rp {moneyFormatter.format(pricing.deliveryPrice)}
            </Text>
          </div>
          <Divider className="mb-2" />

          <div className="d-flex justify-content-between mb-2">
            <Heading as={3} font="regular">
              Shopping Summary
            </Heading>
            <Text
              as="lg"
              font="bold"
              display="inline-block"
              justifyContent="flex-end"
              color="primary"
            >
              Rp{' '}
              {moneyFormatter.format(
                pricing.totalPrice - pricing.deliveryPrice
              )}
            </Text>
          </div>
        </>
      )}
      <Link to="/checkout">
        <Button primary onClick={buyAction}>
          BUY
        </Button>
      </Link>
    </CardWrapper>
  );
};

export default CardCheckout;

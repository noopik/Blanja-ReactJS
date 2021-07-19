import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardWrapper, Divider } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';

const CardCheckout = ({ myBag, checkout }) => {
  return (
    <CardWrapper>
      <Heading as={3}>Shopping summary</Heading>
      {myBag && (
        <div className="d-flex mb-4">
          <Text as="lg">Total price</Text>
          <Text as="lg" font="medium" display="flex" justifyContent="flex-end">
            $ 40.0
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
              $ 40.0
            </Text>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <Text as="lg" color="secondary">
              Delivery
            </Text>
            <Text as="lg" font="bold" display="flex" justifyContent="flex-end">
              $ 40.0
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
              $ 40.0
            </Text>
          </div>
        </>
      )}
      <Link to="/checkout">
        <Button primary>BUY</Button>
      </Link>
    </CardWrapper>
  );
};

export default CardCheckout;

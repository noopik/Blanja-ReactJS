import React from 'react';
import { Button, CardWrapper } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';

const CardCheckout = () => {
  return (
    <CardWrapper>
      <Heading as={3}>Shopping summary</Heading>
      <div className="d-flex mb-4">
        <Text as="lg">Total price</Text>
        <Text as="lg" font="medium" display="flex" justifyContent="flex-end">
          $ 40.0
        </Text>
      </div>
      <Button primary>BUY</Button>
    </CardWrapper>
  );
};

export default CardCheckout;

import React from 'react';
import { Button, CardWrapper, InputCheck } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';
import { Wrapper } from './styled';
import HeadingCard from './Heading';
import Body from './Body';

const CheckoutDetail = ({ heading, body, checkout }) => {
  return (
    <Wrapper checkout={checkout}>
      {!checkout && <InputCheck className="input" />}
      {heading && <HeadingCard />}
      {body && <Body checkout={checkout} />}
    </Wrapper>
  );
};

export default CheckoutDetail;

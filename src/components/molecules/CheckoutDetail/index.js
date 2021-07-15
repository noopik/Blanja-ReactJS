import React from 'react';
import { Button, CardWrapper, InputCheck } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';
import { Wrapper } from './styled';
import HeadingCard from './Heading';
import Body from './Body';

const CheckoutDetail = ({ heading, body }) => {
  return (
    <Wrapper>
      <InputCheck className="input" />
      {heading && <HeadingCard />}
      {body && <Body />}
    </Wrapper>
  );
};

export default CheckoutDetail;

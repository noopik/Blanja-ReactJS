import React from 'react';
import { InputCheck } from '../../atoms';
import Body from './Body';
import HeadingCard from './Heading';
import { Wrapper } from './styled';

const CheckoutDetail = ({ heading, body, checkout, onClick }) => {
  return (
    <Wrapper checkout={checkout}>
      {!checkout && <InputCheck className="input" onClick={onClick} />}
      {heading && <HeadingCard />}
      {body && <Body checkout={checkout} />}
    </Wrapper>
  );
};

export default CheckoutDetail;

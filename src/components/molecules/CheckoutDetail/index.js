import React from 'react';
import { InputCheck } from '../../atoms';
import Body from './Body';
import HeadingCard from './Heading';
import { Wrapper } from './styled';

const CheckoutDetail = ({
  heading,
  body,
  checkout,
  onClick,
  nameProduct,
  store,
  total,
  counterTotal,
  image,
}) => {
  return (
    <Wrapper checkout={checkout}>
      {!checkout && <InputCheck className="input" onClick={onClick} />}
      {heading && <HeadingCard />}
      {body && (
        <Body
          nameProduct={nameProduct}
          store={store}
          total={total}
          checkout={checkout}
          counterTotal={counterTotal}
          image={image}
        />
      )}
    </Wrapper>
  );
};

export default CheckoutDetail;

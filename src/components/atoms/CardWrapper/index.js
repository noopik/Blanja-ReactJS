import React from 'react';
import { Wrapper } from './styled';

const CardWrapper = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default CardWrapper;

import React from 'react';
import { Main } from './styled/Main';

const index = ({ children, className }) => {
  return <Main className={`container ${className}`}>{children}</Main>;
};

export default index;

import React from 'react';
import { Main } from './styled/Main';

const index = ({ children, className }) => {
  return <Main className={`${className}`}>{children}</Main>;
};

export default index;

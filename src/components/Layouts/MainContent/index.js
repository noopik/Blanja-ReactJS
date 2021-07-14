import React from 'react';
import { Main } from './styled/Main';

const index = ({ children }) => {
  return <Main className="container">{children}</Main>;
};

export default index;

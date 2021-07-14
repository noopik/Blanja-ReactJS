import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
  .left {
    filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
    border-radius: 4px 0px 0px 4px;
  }

  .left:hover {
  }

  .right {
    border-radius: 0px 4px 4px 0px;
    filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
  }
`;

const ButtonTogller = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default ButtonTogller;

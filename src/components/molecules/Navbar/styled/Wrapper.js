import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children, className }) => {
  const WrapperContent = styled.div`
    padding: 30px 0;
    display: flex;
    /* background-color: blue; */
    gap: 16px;
  `;
  return <WrapperContent className={className}>{children}</WrapperContent>;
};

export default Wrapper;

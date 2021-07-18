import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../../../Layouts';

const Wrapper = ({ children, className }) => {
  const WrapperContent = styled.div`
    padding: 30px 0;
    display: flex;
    /* background-color: blue; */
    gap: 16px;
    /* RESPONSIVE */
    width: 80%;
    margin: 0 auto;

    ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    width: 90%;
  `}
    ${customMedia.lessThan('tablet')`
    /* for screen sizes less than 768px */
    width: 95%;
  `}
  `;
  return <WrapperContent className={className}>{children}</WrapperContent>;
};

export default Wrapper;

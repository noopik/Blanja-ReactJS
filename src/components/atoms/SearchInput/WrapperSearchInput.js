import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../assets/colors';

const Wrapper = styled.div`
  width: 100%;
  /* wrapper */
  /* background: #ffffff; */
  border: 1px solid #8e8e93;
  box-sizing: border-box;
  border-radius: 23px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  position: relative;

  .input {
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 23px;
    width: 100%;
    /* height: 40px; */
    font: inherit;
    border: 0;
  }
  input:focus {
    outline: none;
  }
  .icon {
    border: 0;
    width: 18px;
    height: 18px;
  }
  .icon-wrapper {
    height: 100%;
    right: 1.2rem;
    position: absolute;
    display: flex;
    align-items: center;
  }

  .icon-wrapper:hover {
    cursor: pointer;
  }

  .icon-wrapper:hover path {
    fill: ${colors.primary};
  }
`;

const WrapperSearchInput = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WrapperSearchInput;

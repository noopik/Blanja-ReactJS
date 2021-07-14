import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.div`
  font-size: 14px;
  font: inherit;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 48px;
  background-color: ${({ primary }) => (primary ? '#db3022' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : '#9b9b9b')};
  border: ${({ primary }) => (primary ? 0 : 1)}px;
  border-color: ${({ primary }) => (primary ? '#db3022' : '#9b9b9b')}px;
  border-style: solid;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    color: ${({ primary }) => (primary ? 'white' : '#1b1b1b')};
    border-color: ${({ primary }) => (primary ? '#db3022' : '#1b1b1b')}px;
  }
`;

const ToggleItem = ({ primary, className, children, to }) => {
  return (
    <Link to={to} className="anchor">
      <Button className={className} primary={primary}>
        {children}
      </Button>
    </Link>
  );
};

export default ToggleItem;

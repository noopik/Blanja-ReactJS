import React from 'react';
import styled from 'styled-components';
import { customMedia } from '../../../components/Layouts';

const ButtonIcon = ({ onClick, className }) => {
  return (
    <ButtonWrapper
      className={className}
      aria-controls="responsive-navbar-nav"
      onClick={onClick}
    >
      <svg viewBox="0 0 459 459" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 382.5H459V331.5H0V382.5ZM0 255H459V204H0V255ZM0 76.5V127.5H459V76.5H0Z"
          fill="#9B9B9B"
        />
      </svg>
    </ButtonWrapper>
  );
};

export default ButtonIcon;

const ButtonWrapper = styled.div`
  display: none;
  ${customMedia.lessThan('865px')`
      /* for screen sizes less than 768px */
      display: flex;
  `}

  width: 60px;
  &:hover {
    path {
      fill: '#ec3333';
    }
  }
`;

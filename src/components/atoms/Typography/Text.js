import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Text({
  children,
  as,
  bg,
  width,
  display,
  justifyContent,
  alignItems,
  link,
  color,
}) {
  // console.log(as);
  const Text = styled.p`
    font-family: Metropolis;
    font-size: ${({ as }) => {
      if (as === 'lg') return 16;
      else if (as === 'md') return 14;
      else if (as === 'sm') return 12;
      else return 14;
    }}px;
    font-weight: ${({ as }) => (as === 'md' ? 600 : 400)}px;
    color: ${({ as }) => (as === 'sm' ? '#9B9B9B' : '#222222')};
    color: ${({ as }) => {
      if (color === 'primary') return '#db3022';
    }};
    display: ${({ display }) => display};
    width: 100%;
    width: ${({ width }) => width && width}px;
    background-color: ${({ bg }) => bg};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  `;

  if (link) {
    return (
      <Link to="#" style={{ textDecoration: 'none' }}>
        <Text
          as={as}
          bg={bg}
          width={width}
          display={display}
          justifyContent={justifyContent}
          alignItems={alignItems}
          color={color}
        >
          {children}
        </Text>
      </Link>
    );
  }

  return (
    <Text
      as={as}
      bg={bg}
      width={width}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      color={color}
    >
      {children}
    </Text>
  );
}

export default Text;

PropTypes.Heading = {
  children: PropTypes.element,
  as: PropTypes.string,
};

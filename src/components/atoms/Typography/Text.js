import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Text = styled.p`
  font-family: ${({ font }) => {
    if (font === 'medium') return 'Metropolis-SemiBold';
    else if (font === 'bold') return 'Metropolis-Bold';
    else return 'Metropolis';
  }};
  font-size: ${({ as }) => {
    if (as === 'lg') return 16;
    else if (as === 'md') return 14;
    else if (as === 'sm') return 12;
    else return 14;
  }}px;
  font-weight: ${({ as }) => (as === 'md' ? 600 : 400)}px;
  color: ${({ as }) => (as === 'sm' ? '#9B9B9B' : '#222222')};
  color: ${({ as, color }) => {
    if (color === 'primary') return '#db3022';
    if (color === 'secondary') return '#9B9B9B';
  }};
  display: ${({ display }) => display};
  /* width: 100%; */
  width: ${({ width }) => width && width}px;
  background-color: ${({ bg }) => bg};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap}px;

  &:hover {
    opacity: ${({ to }) => (to ? 0.5 : 1)};
    cursor: ${({ to }) => (to ? 'pointer' : null)};
  }
`;

function TextParagraph({
  children,
  as,
  bg,
  width,
  display,
  justifyContent,
  alignItems,
  to,
  color,
  gap,
  className,
  font,
}) {
  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <Text
          as={as}
          bg={bg}
          width={width}
          display={display}
          justifyContent={justifyContent}
          alignItems={alignItems}
          color={color}
          gap={gap}
          font={font}
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
      gap={gap}
      className={className}
      font={font}
    >
      {children}
    </Text>
  );
}

export default TextParagraph;

PropTypes.Heading = {
  children: PropTypes.element,
  as: PropTypes.string,
};

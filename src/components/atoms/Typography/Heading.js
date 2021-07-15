import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContentWrapper } from '../styled';
import { Heading1, Heading2, Heading3, Heading4 } from './styled';

const fonts = {
  regular: 'Metropolis',
  medium: 'Metropolis-SemiBold',
  bold: 'Metropolis-Bold',
};

const Heading = ({
  children,
  as,
  mt,
  mr,
  mb,
  ml,
  py,
  px,
  my,
  mx,
  font,
  className,
}) => {
  const typeFont = fonts[`${font}`];

  return (
    <ContentWrapper
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      py={py}
      px={px}
      my={my}
      mx={mx}
    >
      {as === 1 && (
        <Heading1 font={typeFont} className={className}>
          {children}
        </Heading1>
      )}
      {as === 2 && (
        <Heading2 font={typeFont} className={className}>
          {children}
        </Heading2>
      )}
      {as === 3 && (
        <Heading3 font={typeFont} className={className}>
          {children}
        </Heading3>
      )}
      {as === 4 && (
        <Heading4 font={typeFont} className={className}>
          {children}
        </Heading4>
      )}
    </ContentWrapper>
  );
};

export default Heading;

Heading.defaultProps = {
  as: 1,
};

PropTypes.Heading = {
  children: PropTypes.element,
  as: PropTypes.number,
};

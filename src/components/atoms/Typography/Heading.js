import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContentWrapper } from '../styled';

const Heading = ({ children, as, mt, mr, mb, ml, py, px, my, mx }) => {
  const Heading1 = styled.h1`
    font-family: Metropolis;
    font-size: 34px;
    color: #222222;
  `;

  const Heading2 = styled.h2`
    font-family: Metropolis;
    font-size: 24px;
    color: #222222;
  `;

  const Heading3 = styled.h3`
    font-family: Metropolis;
    font-size: 18px;
    color: #222222;
  `;

  const Heading4 = styled.h4`
    font-family: Metropolis;
    font-size: 16px;
    color: #222222;
  `;

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
      {as === 1 && <Heading1>{children}</Heading1>}
      {as === 2 && <Heading2>{children}</Heading2>}
      {as === 3 && <Heading3>{children}</Heading3>}
      {as === 4 && <Heading4>{children}</Heading4>}
    </ContentWrapper>
  );
};

export default Heading;

PropTypes.Heading = {
  children: PropTypes.element,
  as: PropTypes.number,
};

import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-family: ${({ font }) => (font ? font : 'Metropolis-SemiBold')};
  font-size: 34px;
  color: #222222;
`;

export const Heading2 = styled.h2`
  font-family: ${({ font }) => (font ? font : 'Metropolis-SemiBold')};
  font-size: 24px;
  color: #222222;
`;

export const Heading3 = styled.h3`
  font-family: ${({ font }) => (font ? font : 'Metropolis-SemiBold')};
  font-size: 18px;
  color: #222222;
`;

export const Heading4 = styled.h4`
  font-family: ${({ font }) => (font ? font : 'Metropolis-SemiBold')};
  font-size: 16px;
  color: #222222;
`;

import styled from 'styled-components';
import { customMedia } from '../../Layouts';

export const Heading1 = styled.h1`
  font-family: ${({ font }) => (font ? font : 'Metropolis-SemiBold')};
  font-size: 34px;
  color: #222222;
  ${customMedia.lessThan('laptop')`
    font-size: 30px;
  `}
  ${customMedia.lessThan('tablet')`
    font-size: 26px;
  `}
`;

export const Heading2 = styled.h2`
  font-family: ${({ font }) => (font ? font : 'Metropolis-SemiBold')};
  font-size: 24px;
  color: #222222;
  ${customMedia.lessThan('laptop')`
    font-size: 22px;
  `}
  ${customMedia.lessThan('tablet')`
    font-size: 20px;
  `}
  ${customMedia.lessThan('mobile')` 
    font-size: 20px;
  `}
`;

export const Heading3 = styled.h3`
  font-family: ${({ font }) => (font ? font : 'Metropolis-SemiBold')};
  font-size: 18px;
  color: #222222;
  ${customMedia.lessThan('laptop')`
    font-size: 20px;
  `}
  ${customMedia.lessThan('tablet')`
    font-size: 20px;
  `}
`;

export const Heading4 = styled.h4`
  font-family: ${({ font }) => (font ? font : 'Metropolis-SemiBold')};
  font-size: 16px;
  color: #222222;
  ${customMedia.lessThan('laptop')`
    font-size: 20px;
  `}
  ${customMedia.lessThan('tablet')`
    font-size: 20px;
  `}
`;

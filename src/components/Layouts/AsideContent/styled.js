import styled from 'styled-components';
import { customMedia } from '../BreakPoints';

export const Wrapper = styled.div`
  /* background-color: yellow; */
  display: flex;
  gap: 2rem;
  ${customMedia.lessThan('820px')`
    margin-top: 2rem;
    flex-direction: column-reverse; 
  `}

  .left {
    /* background-color: green; */
    width: 70%;
    ${customMedia.lessThan('820px')`
      width: 100%;
    `}
  }

  .right {
    width: 30%;
    ${customMedia.lessThan('820px')`
      width: 100%;
    `}
  }
`;

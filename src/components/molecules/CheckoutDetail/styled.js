import styled from 'styled-components';
import { CardWrapper } from '../../atoms';

export const Wrapper = styled(CardWrapper)`
  display: flex;

  .content {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: 2.6rem;
    justify-content: space-between;
    .heading {
      margin-bottom: 0;
      height: 100%;
      line-height: 24px;
      margin-right: 0.5rem;
    }

    .text {
      width: max-content;
    }
    .btn {
    }
  }
`;

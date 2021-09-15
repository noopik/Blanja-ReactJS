import styled from 'styled-components';
import { CardWrapper } from '../../atoms';

export const Wrapper = styled((props) => <CardWrapper {...props} />)`
  display: flex;
  margin-bottom: 1rem;

  .content {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: ${({ checkout }) => (checkout ? 0 : 2.6)}rem;
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

// const ExtendedComponent = styled(props => <CardWrapper {...props} />)`
//   [Your awesome styles here]
// `;

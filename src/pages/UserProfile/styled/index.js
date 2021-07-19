import styled from 'styled-components';
import { customMedia } from '../../../components/Layouts';
import Aside from './Aside';
import Container from './Container';
import Main from './Main';

const MainAside = styled.div`
  background: #f5f5f5;
  width: 75%;
  padding: 40px;
  padding-top: 150px;
  width: 100%;
  ${customMedia.lessThan('940px')`
    // background-color: pink; 

  `}
`;

export { Aside, Container, Main, MainAside };

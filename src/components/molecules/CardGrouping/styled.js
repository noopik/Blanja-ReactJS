import styled from 'styled-components';
import { customMedia } from '../../../components/Layouts/index';

export const GridContainer = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto;
  gap: 20px;
  padding: 0;
  /* background-color: yellow; */
  ${customMedia.lessThan('1165px')`
    display: grid;
    grid-template-columns: auto auto auto auto;
  `}
  ${customMedia.lessThan('890px')`
    display: grid;
    grid-template-columns: auto auto auto ;
  `}
  ${customMedia.lessThan('890px')`
    display: grid;
    grid-template-columns: auto auto  ;
  `}
  ${customMedia.lessThan('450px')`
    display: grid;
    grid-template-columns: auto;
  `}
  .item {
    /* background-color: yellow; */
  }
`;

export const Item = styled.div`
  /* background-color: #070707; */
  /* width: 250px; */
  /* width: auto; */
  /* max-width: 280px; */
`;

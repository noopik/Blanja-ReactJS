import styled from 'styled-components';
import { customMedia } from '../../../components/Layouts';

export const FooterWrapper = styled.footer`
  border-top: 1px;
  border-color: #dfdfdf;
  border-style: solid;
  width: 100vw;
  margin-top: 100px;
  padding-top: 45px;
  /* position: absolute; */
  /* bottom: 0; */
  .container-wrapper {
    width: 80%;
    margin: 0 auto;
  }
  .body {
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    margin-bottom: 24px;
    /* background-color: yellow; */
    ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    // display: none;
    width: 90%;
    justify-content: center; 
  `}
    .company {
      width: 30%;
      color: #c5c5c5;
      ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    width: 100%;
    // background-color: yellow; 

  `}

      .logo {
        width: 10px;
        background-color: red;
        .sc-hKFxyN.hNAhhe {
          justify-content: flex-start;
          margin-bottom: 12px;
        }
      }
    }

    .navigation {
      width: 70%;
      display: flex;
      gap: 4rem;
      ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    display: none;
  `}
      li {
        list-style: none;
        color: #c5c5c5;
        margin-bottom: 8px;
      }
      li:hover {
        color: #db3022;
      }
      .nav-title {
        font-weight: 600;
        font-size: 18px;
        color: #646363;
        margin-bottom: 12px;
      }
      .nav-title:hover {
        color: #646363;
      }
    }
  }

  .foot {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #c5c5c5;
  }
`;

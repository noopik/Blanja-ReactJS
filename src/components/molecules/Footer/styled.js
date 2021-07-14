import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  border-top: 1px;
  border-color: #dfdfdf;
  border-style: solid;
  width: 100vw;
  margin-top: 100px;
  padding-top: 45px;

  .body {
    display: flex;
    gap: 1rem;
    margin-bottom: 24px;
    .company {
      width: 30%;
      color: #c5c5c5;

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

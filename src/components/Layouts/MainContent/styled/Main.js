import styled from 'styled-components';
import { customMedia } from '../../BreakPoints';

export const Main = styled.main`
  margin: 0 auto;
  margin-top: 150px;
  width: 80%;
  ${customMedia.lessThan('desktop')`
    /* for screen sizes less than 1280px */
    width: 90%; 
  `};
  ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    width: 90%;
  `};
  ${customMedia.lessThan('tablet')`
    /* for screen sizes less than 768px */
    width: 95%;
  `};
  ${customMedia.lessThan('mobile')`
    /* for screen sizes less than 481px */
    width: 95%;

  `};
  ${customMedia.lessThan('minimobile')`
    /* for screen sizes less than 320px */ 
    width: 95%; 
  `};
  .carousel {
    margin-top: 50px;
  }
  .section {
    /* background-color: yellow; */
    margin-top: 50px;

    .carousel {
      margin-top: 30px;
    }
  }

  /* START = CHECKOUT PAGES */
  &.checkout-page {
    .detail-user {
      margin-bottom: 2rem;
    }
    .btn-wrapper {
      width: 40%;
      margin-top: 2rem;
    }
  }
  /* END = CHECKOUT PAGES */
  /* START = CATEGORY PAGES */
  &.category-page {
    .breadcrumbs {
      margin-bottom: 32px;
    }
  }
  /* END = CATEGORY PAGES */
`;

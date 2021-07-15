import styled from 'styled-components';
export const Main = styled.main`
  margin-top: 150px;
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

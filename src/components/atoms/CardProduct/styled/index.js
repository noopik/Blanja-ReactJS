import styled from 'styled-components';

export const Card = styled.div`
  color: #222222;
  background-color: white;
  box-shadow: 0px 0px 14px rgba(173, 173, 173, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0px 0px 14px rgba(44, 44, 44, 0.164);
    cursor: pointer;
  }

  .image-product {
    height: 140px;
    object-fit: contain;
  }
`;

export const BodyProduct = styled.div`
  padding: 10px 12px;

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .price {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    margin: 6px 0;
    color: #db3022;
  }

  .store {
    /* font-family: Metropolis; */
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 12px;
    color: #9b9b9b;
    margin-bottom: 11px;
  }

  .star-wrapper {
    display: flex;
    /* align-self: flex-start; */
    gap: 2px;
    height: 100%;
  }

  .sold {
    margin-left: 3px;
    color: #9b9b9b;
  }
`;

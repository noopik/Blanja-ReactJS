import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../../../components/atoms/Typography';
import { CardGrouping } from '../../../components/molecules';

const DetailProduct = () => {
  return (
    <Wrapper>
      <Heading>Informasi Produk</Heading>
      <div className="condition-wrapper">
        <Heading as={2}>Condition</Heading>
        <Text color="primary" className="condition-product">
          New
        </Text>
      </div>
      <div className="description-wrapper">
        <Heading as={2}>Description</Heading>
        <Text color="secondary" className="condition-product">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis
          laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit
          imperdiet ac ac felis. Etiam tincidunt tristique placerat.
          Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris
          vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at,
          ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu,
          sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
          sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum
          tempus. Mauris vel molestie orci.
        </Text>
      </div>
      <CardGrouping />
    </Wrapper>
  );
};

export default DetailProduct;

const Wrapper = styled.div`
  /* background-color: yellow; */
  margin-top: 40px;

  .condition-wrapper {
    .condition-product {
      font-size: 22px;
    }
  }

  .description-wrapper {
    margin-bottom: 32px;
  }
`;

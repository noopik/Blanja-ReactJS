import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../../../components/atoms/Typography';
import { customMedia } from '../../../components/Layouts';
import { CardGrouping } from '../../../components/molecules';
const DetailProduct = ({ data }) => {
  const [dataDescription, setDataDescription] = useState({});

  useEffect(() => {
    setDataDescription(data);
  }, [data]);

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
          {dataDescription.description ? (
            dataDescription.description
          ) : (
            // <Loader line className="loader" />
            <p>No description</p>
          )}
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
  ${customMedia.lessThan('1280px')`
    margin-top: 100px; 
    `}
  ${customMedia.lessThan('872px')`
    margin-top: 50px; 
  `}

  .condition-wrapper {
    .condition-product {
      font-size: 22px;
    }
  }

  .description-wrapper {
    margin-bottom: 32px;
    .loader {
      margin-top: 2rem;
    }
  }
`;

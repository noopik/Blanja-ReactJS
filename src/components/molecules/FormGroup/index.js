import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../../atoms/styled';

const Form = styled.form`
  width: 400px;
  display: ${(flex) => flex};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
`;

const FormGroup = ({
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  children,
  flex,
  justifyContent,
  alignItems,
  gap,
}) => {
  return (
    <ContentWrapper
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
    >
      <Form
        flex={flex}
        justifyContent={justifyContent}
        alignItems={alignItems}
        gap={gap}
      >
        {children}
      </Form>
    </ContentWrapper>
  );
};

export default FormGroup;

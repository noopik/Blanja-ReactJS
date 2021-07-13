import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../styled';

const Input = styled.input`
  border: 1px solid #9b9b9b;
  height: 48px;
  width: 400px;
  box-sizing: border-box;
  padding: 16px 23px;
  font-size: 14px;
  font-weight: 500;
  color: #9b9b9b;
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
  border-radius: 4px;
`;

const FormInput = ({
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  width,
  height,
  type,
  placeholder,
  name,
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
      width={width}
      height={height}
    >
      <Input type={type} placeholder={placeholder} name={name} />;
    </ContentWrapper>
  );
};

export default FormInput;

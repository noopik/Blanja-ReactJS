import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-top: ${({ mt }) => mt}px;
  margin-right: ${({ mr }) => mr}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
  padding-top: ${({ pt }) => pt}px;
  padding-right: ${({ pr }) => pr}px;
  padding-bottom: ${({ pb }) => pb}px;
  padding-left: ${({ pl }) => pl}px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

function ContentWrapper({
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  children,
  width,
  height,
}) {
  return (
    <Wrapper
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
      {children}
    </Wrapper>
  );
}

export default ContentWrapper;

PropTypes.ContentWrapper = {
  mt: PropTypes.number,
  mr: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  pt: PropTypes.number,
  pr: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  children: PropTypes.element,
};

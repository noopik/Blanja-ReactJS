import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const SectionMain = ({ children, className }) => {
  return <Section className={className}>{children}</Section>;
};

export default SectionMain;

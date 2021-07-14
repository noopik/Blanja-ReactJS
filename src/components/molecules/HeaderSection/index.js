import React from 'react';
import { Heading, Text } from '../../atoms/Typography';

const HeaderSection = ({ title, subTitle }) => {
  return (
    <>
      <Heading as={1}>{title}</Heading>
      <Text as="lg" color="secondary">
        {subTitle}
      </Text>
    </>
  );
};

export default HeaderSection;

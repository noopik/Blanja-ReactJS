import React from 'react';
import { Button } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';

const HeadingCard = ({ totalProduct }) => {
  return (
    <div className="content">
      <div className="d-flex">
        <Heading font="regular" as={3} className="heading">
          Select all items
        </Heading>
        <Text as="lg" className="text" color="secondary">
          ( {totalProduct} items selected)
        </Text>
      </div>
      <Button type="link" primary className="btn">
        Delete
      </Button>
    </div>
  );
};

export default HeadingCard;

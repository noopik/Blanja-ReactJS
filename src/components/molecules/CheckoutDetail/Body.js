import React from 'react';
import { Button } from '../../atoms';
import { Heading, Text } from '../../atoms/Typography';
import { ProductCategory } from '../../../assets/images';

const Body = () => {
  return (
    <div className="content">
      <div className="d-flex">
        <img src={ProductCategory} alt="img" />
        <Text as="lg" className="text" color="secondary">
          (2 items selected)
        </Text>
      </div>
      <Button type="link" primary className="btn">
        Delete
      </Button>
    </div>
  );
};

export default Body;

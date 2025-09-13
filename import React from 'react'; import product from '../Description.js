import React from 'react';
import product from '../product';
import { Card } from 'react-bootstrap';

const Description = () => {
  return (
    <Card.Text className="text-muted lh-base text-center px-3">
      {product.description}
    </Card.Text>
  );
};

export default Description;

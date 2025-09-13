import React from 'react';
import product from '../product';
import { Card } from 'react-bootstrap';

const Name = () => {
  return (
    <Card.Title className="text-center text-primary fw-bold fs-2">
      {product.name}
    </Card.Title>
  );
};

export default Name;

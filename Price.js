import React from 'react';
import product from '../product';
import { Badge } from 'react-bootstrap';

const Price = () => {
  return (
    <div className="text-center my-3">
      <Badge bg="success" className="fs-5 p-3">
        ${product.price}
      </Badge>
      <div className="text-muted mt-1">Free Shipping Included</div>
    </div>
  );
};

export default Price;

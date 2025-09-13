import React from 'react';
import product from '../product';
import { Card } from 'react-bootstrap';

const Image = () => {
  return (
    <Card.Img 
      variant="top" 
      src={product.image} 
      alt={product.name}
      style={{ 
        height: '300px', 
        objectFit: 'cover',
        borderRadius: '15px 15px 0 0'
      }}
    />
  );
};

export default Image;

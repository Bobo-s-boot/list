import React from 'react';
import { useHistory } from 'react-router';

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const Component: React.FC<ProductItemProps> = ({
  id,
  name,
  price,
  description,
}) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/edit-product/${id}`);
  };

  return (
    <div className="product-item">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

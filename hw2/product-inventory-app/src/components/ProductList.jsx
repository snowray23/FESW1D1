import React from 'react';
import useInventory from '../hooks/useInventory';

const ProductList = () => {
  const { products, removeProduct } = useInventory();

  return (
    <div>
      <h2>Cell Phones</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
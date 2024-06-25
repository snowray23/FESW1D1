import { useState } from 'react';

const useInventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Iphone 15', price: 950 },
    { id: 2, name: 'Samsung Galaxy', price: 800 },
    { id: 3, name: 'Google Pixel', price: 750 },
  ]);

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return {
    products,
    removeProduct,
  };
};

export default useInventory;
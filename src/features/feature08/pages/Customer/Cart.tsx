// Cart.tsx
import React, { useState } from 'react';
import PayButton from './PayButton';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Update the type based on your actual data structure

  const handleAddToCart = (itemName: string, itemPrice: number) => {
    setCartItems(prevItems => [...prevItems, { name: itemName, price: itemPrice }]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      {/* Example items */}
      <button onClick={() => handleAddToCart('Item 1', 10.99)}>Add Item 1 to Cart</button>
      <button onClick={() => handleAddToCart('Item 2', 19.99)}>Add Item 2 to Cart</button>
      <PayButton cartItems={cartItems} />
    </div>
  );
};

export default Cart;

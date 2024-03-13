import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type CartItemProps = {
  cartItem: any;
};

const CartItems = ({ cartItem }: CartItemProps) => {
  // Check if cartItem is defined
  if (!cartItem) {
    return null; // or handle the absence of cartItem in another way
  }

  const [photo, productId, name, price, quantity] = cartItem;

  return (
    <div key={productId} className='cart-item'>
      <img src={photo} alt={`Product: ${name}`} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>{price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
      <div>{price * quantity} Rs.</div>
      <div>
        <button>Remove</button>
        {/* ... other buttons */}
      </div>
    </div>
  );
};

export default CartItems;

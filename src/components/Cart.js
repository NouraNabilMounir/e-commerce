import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                </div>
            ))}
            <div className="cart-total">
                Total: 
            </div>
        </div>
    );
};

export default Cart;

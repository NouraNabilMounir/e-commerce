import React, { useState, useEffect } from 'react';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cart');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const handleRemoveFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <main className="container mx-auto p-4">
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <div key={item.id} className="border p-4 mb-4 rounded shadow-md">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-700">${item.price}</p>
                            <button 
                                onClick={() => handleRemoveFromCart(item)}
                                className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </main>
        </div>
    );
};

export default CartPage;

import React, { useState, useEffect } from 'react';

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cart');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            // استرجاع الطلبات السابقة المحفوظة
            const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];

            // إضافة الطلب الجديد إلى الطلبات السابقة
            const newOrders = [...previousOrders, { date: new Date(), items: cartItems }];
            localStorage.setItem('orders', JSON.stringify(newOrders));

            // إفراغ السلة
            localStorage.removeItem('cart');
            setCartItems([]);
            alert('Order placed successfully!');
        } else {
            alert('No items in the cart!');
        }
    };

    return (
        <div>
            <main className="container mx-auto p-4">
                <h2 className="text-xl font-bold mb-4">Checkout</h2>
                {cartItems.length > 0 ? (
                    <div>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id} className="border p-4 mb-4 rounded shadow-md">
                                    {item.title} - ${item.price}
                                </li>
                            ))}
                        </ul>
                        <button 
                            onClick={handleCheckout}
                            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Place Order
                        </button>
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </main>
        </div>
    );
};

export default CheckoutPage;

import React, { useState, useEffect } from 'react';

const OrderHistoryPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
            setOrders(JSON.parse(storedOrders));
        }
    }, []);

    return (
        <div>
            <main className="container mx-auto p-4">
                <h2 className="text-xl font-bold mb-4">Order History</h2>
                {orders.length > 0 ? (
                    <div>
                        {orders.map((order, index) => (
                            <div key={index} className="border p-4 mb-4 rounded shadow-md">
                                <h3 className="text-lg font-semibold">Order Date: {new Date(order.date).toLocaleString()}</h3>
                                <ul>
                                    {order.items.map(item => (
                                        <li key={item.id} className="text-gray-700">
                                            {item.title} - ${item.price}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No orders found.</p>
                )}
            </main>
        </div>
    );
};

export default OrderHistoryPage;

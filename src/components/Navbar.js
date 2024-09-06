import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">MyStore</Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/cart" className="hover:text-gray-300">Cart</Link>
                    <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
                    <Link to="/order-history" className="hover:text-gray-300">Order History</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

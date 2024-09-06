import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded shadow-md">
                    <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
                    <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-4">${product.price}</p>
                    <button 
                        onClick={() => onAddToCart(product)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

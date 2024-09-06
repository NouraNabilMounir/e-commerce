import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const productsData = await response.json();
                setProducts(productsData);
                localStorage.setItem('products', JSON.stringify(productsData));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            fetchProducts();
        }
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter(product => 
                product.category.includes(filter) || filter === ''
            )
        );
    }, [products, filter]);

    const handleAddToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    return (
        <div>
            <main className="container mx-auto p-4">
                <Filter 
                    categories={['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing']} 
                    onFilterChange={setFilter} 
                />
                <ProductList 
                    products={filteredProducts} 
                    onAddToCart={handleAddToCart} 
                />
            </main>
        </div>
    );
};

export default Home;

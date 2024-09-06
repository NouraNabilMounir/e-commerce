import React from 'react';

const Filter = ({ categories, onFilterChange }) => {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-semibold mb-2">Filter by Category:</label>
            <select 
                id="category" 
                onChange={handleFilterChange} 
                className="p-2 border border-gray-300 rounded-lg w-full"
            >
                <option value="">All Categories</option>
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;

import React from 'react';

const Filter = ({ onCategoryChange }) => {
  const handleFilterChange = event => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div className="filter">
      <label htmlFor="category-filter">Filter by Category:</label>
      <select id="category-filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Groceries">Groceries</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>
    </div>
  );
};

export default Filter;

import React from "react";

function Filter({ onCategoryChange, filterCategory, onSearchChange, search}) {
  function handleChange(e){
    onSearchChange(e)
    
  }
  function handleCategoryChange(e){
    onCategoryChange(e)
    filterCategory(e.target.value)
    
  }
  
  return (
    <div className="Filter">
      <input type="text" name="search" onChange={handleChange} value={search} placeholder="Search..." />
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

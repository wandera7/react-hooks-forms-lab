import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsDisplay,setItemDisplay]=useState(items)
  const[searchValue,setSearchValue]=useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);

  }
  
  const newItemsDisplay=(name)=>{
    if(name==='All'){
      return setItemDisplay(items)
    }
    const newItems=items.filter((item)=>{
      return item.category===name
    })
    setItemDisplay(newItems)

  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });
  
  function handleSearch(event){
    setSearchValue(event.target.value)
    const newItems=items.filter((item)=>{ 
      if(item.name===event.target.value){
        return true
      }
      return  item.name.includes(event.target.value) 
    })
    setItemDisplay(newItems)
  }

  function addData(dataObj){
    setItemDisplay((prevValue)=>
    {
      return [...prevValue,dataObj]
    })
   
  }

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={addData} />
      <Filter onCategoryChange={handleCategoryChange}
        filterCategory={newItemsDisplay}
        search={searchValue} 
        onSearchChange={handleSearch} 
        />
      <ul className="Items">
        {itemsDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

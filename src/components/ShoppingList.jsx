import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
  const matchesCategory =
    selectedCategory === "All" || item.category === selectedCategory;

  const matchesSearch =
    item.name.toLowerCase().includes((searchText || "").toLowerCase());

  return matchesCategory && matchesSearch;
});

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter onCategoryChange={handleCategoryChange} search={searchText} onSearchChange={setSearchText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
import React, { useState } from "react";


function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = { id: Date.now(), name, category };
    if (typeof onItemFormSubmit === "function") {
  onItemFormSubmit(newItem);
}
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
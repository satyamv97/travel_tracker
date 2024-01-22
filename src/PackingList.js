import { useState } from "react";
import { Items } from "./Items";

export function PackingList({ item, onDeleteItem, onToggleItem, onClearList }) {

  const [sortBy, setSortBy] = useState("input");
  let SortedItems;

  if (sortBy === "clear") SortedItems = [];

  if (sortBy === "input") SortedItems = item;

  if (sortBy === "description") {
    SortedItems = item.slice().sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    SortedItems = item.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {SortedItems.map((e) => <Items item={e} key={e.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        )}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Order by Input</option>
          <option value="description">Order by Description</option>
          <option value="packed">Order by Packed Status</option>
        </select>
        <span><button onClick={onClearList}>Clear All</button></span>
      </div>
    </div>
  );
}

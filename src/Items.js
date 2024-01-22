
export function Items({ item, onDeleteItem, onToggleItem }) {
  return (
    <li style={item.packed ? { textDecoration: 'line-through' } : {}}>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      {item.quantity} {item.description}
      <span><button onClick={() => onDeleteItem(item.id)}>❌</button></span></li>
  );
}

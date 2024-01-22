export function Stats({ items }) {
  if (items.length === 0)
    return (
      <div className="stats">
        <p><em>Start adding Items in you list</em></p>
      </div>
    );

  const totalItem = items.length;
  const packedItem = (items.filter(item => item.packed)).length;
  const percentPacked = Math.round(packedItem / totalItem * 100);
  return (
    <div className="stats">{percentPacked === 100 ?
      "You got everything! Ready to go ✈️ " :
      ` You Have ${totalItem} item in your List and you already Packed ${packedItem} ( ${percentPacked} %)`}</div>

  );
}

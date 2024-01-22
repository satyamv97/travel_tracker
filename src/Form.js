import { useState } from "react";

export function Form({ onaddHandler }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitHandler(e) {
    e.preventDefault();
    if (description === "") return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onaddHandler(newItem);
    // console.log(item)
    setDescription("");
    setQuantity(1);

  }

  //Number is used to convert it into number in return part
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3> What do you need for your trip ❤️</h3>
      <select value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)); }}>

        {Array.from({ length: 20 }, (_, i) => i + 1).map((el) => <option value={el} key={el}>{el}</option>)}
      </select>
      <input type="text" placeholder="items..." value={description} onChange={(e) => { setDescription(e.target.value); }} />
      <button>ADD</button>
    </form>
  );
}

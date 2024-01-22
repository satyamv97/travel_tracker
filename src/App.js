import { useState } from "react";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import Logo from "./Logo";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Purse", quantity: 22, packed: false },
];

function App() {
  const[items, setItems] = useState(initialItems);
  
  function handleToggleItem(id){
    setItems((items)=>items.map((item)=>item.id === id ? {...item,packed:!item.packed} : item))
  }

  function handleAddItems(item){
    setItems((items)=>[...items,item])
  }
  console.log(items)
 
  function handleDeleteItem(id){
    setItems((items)=>items.filter((item) => (item.id) !==id))
  }

  function handleClearList(){
   const confirm = window.confirm("ARE YOU REALLY WANT TO DELETE ALL ITEMS ? ");
    if(confirm ) setItems([]) 
  }

  
  return (
    <>
      <Logo/>
      <Form onaddHandler={handleAddItems} />
      <PackingList item ={items} onDeleteItem={handleDeleteItem} onToggleItem = {handleToggleItem} onClearList = {handleClearList}/>
      <Stats items={items}/>
    </>
  );
}

export default App;





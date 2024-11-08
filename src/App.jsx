import { useState } from 'react'
import List from './List';
import Add from './Add';
import Heading from './Heading';
import './App.css'

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setItem(value);
  }
  const addItem = () => {
    if (item.trim() === "") {
      alert("Please enter a value");
    }
    else {
    setItems((prevItem) => [...prevItem, item]);
    setItem("");
    }
  }
  const del = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };
  return (
    <>
      <Heading />
      <Add handleChange={handleChange} item={item} addItem={addItem } />
      <List items={items} del={del} />
    </>
  )
}

export default App

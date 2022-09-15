import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [items, setItems] = useState([])

  return (
    <div className="app">
      <Header items={items} setItems={setItems}/>
      <ListingsContainer items={items} setItems={setItems}/>
    </div>
  );
}

export default App;

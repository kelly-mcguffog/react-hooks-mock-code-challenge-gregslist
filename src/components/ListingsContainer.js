import React, {useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, setItems}) {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setItems(data))
  },[])

  function deleteItem(deletedItem){
    const newList = items.filter(item => item.id !== deletedItem.id)
    setItems(newList)
  }

  return (
    <main>
      <ul className="cards">
        {items.map(item => {
          return (
          <ListingCard 
          key={item.id} 
          item={item}
          deleteItem={deleteItem}/>
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;

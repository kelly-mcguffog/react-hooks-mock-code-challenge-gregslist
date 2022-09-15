import React, {useState} from "react";
// import React from "react";
function ListingCard({item, deleteItem}) {

  const {id, image, description, location} = item
  const [like, setLike] = useState(false)

  function favoriteButton(){
    setLike(like => !like)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => deleteItem(item))
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button onClick={favoriteButton} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favoriteButton} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

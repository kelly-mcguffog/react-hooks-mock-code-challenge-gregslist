import React, {useState} from "react";
// import React from "react";

function Search({items, setItems}) {

  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
   setItems(searchedItems);
  }

  function handleSearch(e){
    setSearch(e.target.value)
  }

   let searchedItems = items.filter(item => {
      return (item.description.toLowerCase().includes(search.toLowerCase()))
    })

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        // onChange={(e) => console.log(e.target.value)}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

import React, { useState } from "react"

const SearchBar = ({ onSearchSubmit }) => {

  const [searchField, setSearchField] = useState("")

  return (
    <div className="search-bar">
      <form onSubmit={e => onSearchSubmit(searchField, e)}>
        <input
          placeholder="Video Search"
          value={searchField}
          onChange={e => setSearchField(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar

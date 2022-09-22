import React, { useState } from "react"

const SearchBar = ({ onSearchSubmit, setShowPlayer }) => {

  const [searchField, setSearchField] = useState("")

  const search = (e) => {
    e.preventDefault()
    onSearchSubmit(searchField)
    setShowPlayer(false)
  }

  return (
    <div className="search-bar">
      <form onSubmit={e => search(e)}>
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

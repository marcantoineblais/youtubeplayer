import React from "react"

export default class SearchBar extends React.Component {

  state = { SearchField: "" }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={e => this.props.onSearchSubmit(e, this.state.SearchField)}>
          <input
            placeholder="Video Search"
            value={this.state.SearchField}
            onChange={e => this.setState({ SearchField: e.target.value })}
          />
        </form>
      </div>
    )
  }
}

import React from 'react'
import ReactDOMClient from 'react-dom/client'
import youtubeSearch from './api/youtubeSearch'
import SearchBar from './components/SearchBar'

import './index.scss'

class App extends React.Component {

  async onSearchSubmit(e, searchField) {
    e.preventDefault()
    console.log(await youtubeSearch(searchField))
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(<App />)

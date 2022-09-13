import React from 'react'
import ReactDOMClient from 'react-dom/client'
import youtubeSearch from './api/youtubeSearch'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

import './index.scss'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearchSubmit('news')
  }

  onSearchSubmit = async (searchField, e = new Event('submit')) => {
    e.preventDefault()
    const searchResults = await youtubeSearch(searchField)
    this.setState({ videos: searchResults.items })
  }

  onVideoSelect = async (video) => {
    const updatedResults = await youtubeSearch(video.snippet.title)
    this.setState({ selectedVideo: video, videos: updatedResults.items })
  }

  render() {
    return (
      <div className='container'>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>

        <div className='video-playlist-container'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </div>
      </div>
    )
  }
}

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(<App />)

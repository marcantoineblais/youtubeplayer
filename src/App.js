import React, { useEffect, useState } from "react"
import youtubeSearch from "./api/youtubeSearch"
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const App = () => {

  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onSearchSubmit = async (searchField, e = new Event('submit')) => {
    e.preventDefault()
    const searchResults = await youtubeSearch(searchField)
    setVideos(searchResults.items || [])
  }

  const onVideoSelect = async (video) => {
    const updatedResults = await youtubeSearch(video.snippet.title)
    setSelectedVideo(video)
    setVideos(updatedResults.items || [])
  }

  useEffect(() => {
    onSearchSubmit('news')
  }, [])

  return (
    <div className='container'>
      <SearchBar onSearchSubmit={onSearchSubmit} />

      <div className='video-playlist-container'>
        <VideoDetail video={selectedVideo} />
        <VideoList
          videos={videos}
          selectedVideoId={selectedVideo ? selectedVideo.id.videoId : null}
          onVideoSelect={onVideoSelect} />
      </div>
    </div>
  )
}

export default App

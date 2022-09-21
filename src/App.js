import React, { useState } from "react"
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import useVideos from "./hooks/useVideos"

const App = () => {

  const [videos, setVideos] = useVideos('news')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onVideoSelect = async (video) => {
    setSelectedVideo(video)
    setVideos(video.snippet.title)
  }

  return (
    <div className='container'>
      <SearchBar onSearchSubmit={setVideos} />

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

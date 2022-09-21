import React from "react"

const VideoItem = ({ video, onVideoSelect }) => {

  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
      <div className="text">
        <h3>{video.snippet.title}</h3>
        <h5>{video.snippet.channelTitle}</h5>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoItem

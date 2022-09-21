import React from "react"
import DOMPurify from "dompurify"

const VideoItem = ({ video, onVideoSelect }) => {

  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
      <div className="text">
        <h3 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(video.snippet.title)}}></h3>
        <h5>{video.snippet.channelTitle}</h5>
      </div>
    </div>
  )
}

export default VideoItem

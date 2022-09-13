import React from "react"

const VideoItem = (props) => {
  const video = props.video.snippet

  return (
    <div className="video-item" onClick={e => props.onVideoSelect(props.video)}>
      <img src={video.thumbnails.medium.url} alt={video.title}/>
      <div className="text">
        <h3>{video.title}</h3>
        <h5>{video.channelTitle}</h5>
        <p>{video.description}</p>
      </div>
    </div>
  )
}

export default VideoItem

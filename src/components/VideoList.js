import React from "react"
import VideoItem from "./VideoItem"

const renderVideoList = (props) => {
  return (
    props.videos.map((video, i) => {
      return <VideoItem onVideoSelect={props.onVideoSelect} video={video} key={i + 1} />
    })
  )
}

const VideoList = (props) => {
  return <div className="video-list">{renderVideoList(props)}</div>
}

export default VideoList

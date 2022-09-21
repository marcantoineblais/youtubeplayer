import React from "react"
import VideoItem from "./VideoItem"


const VideoList = ({ videos, selectedVideoId, onVideoSelect}) => {
  const renderVideoList = () => {
    return (
      videos.map((video, i) => {
        return selectedVideoId === video.id.videoId ? null : <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />
      })
    )
  }

  return <div className="video-list">{renderVideoList()}</div>
}

export default VideoList

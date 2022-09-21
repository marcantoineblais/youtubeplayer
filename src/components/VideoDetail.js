import React from "react"
import DOMPurify from "dompurify"

const VideoDetail = ({ video }) => {
  let title, description, videoSrc, content
  if (video) {
    title = video.snippet.title
    description = video.snippet.description
    videoSrc = `https://youtube.com/embed/${video.id.videoId}`

    content = (
      <div className="video-detail">
        <div className="video-player">
          <iframe src={videoSrc} title="youtubePlayer"/>
        </div>

        <div className="description">
          <h1 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}></h1>
          <p>{description}</p>
        </div>

      </div>
    )
  }

  return content
}

export default VideoDetail

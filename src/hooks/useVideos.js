import { useState, useEffect } from "react"
import youtubeSearch from "../api/youtubeSearch"

const useVideos = (defaultSearch = "") => {

  const [videos, setVideos] = useState([])

  const search = async (searchField) => {
    const searchResults = await youtubeSearch(searchField)
    setVideos(searchResults.items || [])
  }

  useEffect(() => {
    search(defaultSearch)
  }, [defaultSearch])

  return [videos, search]
}

export default useVideos

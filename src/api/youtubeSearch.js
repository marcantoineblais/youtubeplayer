const KEY = 'AIzaSyAs9xAPJ_3waEWDsfyWp0gLciNd_cb-Flc'

const youtubeParams = (queryParams) => {
  const arrayParams = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`).filter(el => el)
  return arrayParams.join('&')
}

const youtubeSearch = async (searchField) => {
  const query = {
    'part': 'snippet',
    'maxResults': 10,
    'type': 'video',
    'q': searchField,
    'key': KEY
  }

  let doc
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${youtubeParams(query)}`, {
        'headers' : {
          'Accept': 'application/json',
        }
      }
    )
    doc = await res.json()
  } catch (err) {
    console.log(err)
  }

  return doc
}

export default youtubeSearch

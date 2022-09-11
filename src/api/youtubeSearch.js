const youtubeParams = (queryParams) => {
  const arrayParams = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`)
  return arrayParams.join('&')
}

const youtubeSearch = async (searchField) => {
  const KEY = 'AIzaSyBNoBs7dGAv1FMLMHYhcSGv4p703ZJmXLg'
  const queryParams = {
    'part': 'snippet',
    'maxResults': 5,
    'type': 'video',
    'q': searchField,
    'key': KEY
  }
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${youtubeParams(queryParams)}`, {
      'headers' : {
        'Accept': 'application/json',
      }
    }, (err) => (console.log(err))
  )
  const doc = await res.json()
  return doc
}

export default youtubeSearch

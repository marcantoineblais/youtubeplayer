const KEY = 'AIzaSyBNoBs7dGAv1FMLMHYhcSGv4p703ZJmXLg'

const youtubeParams = (queryParams) => {
  const arrayParams = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`)
  return arrayParams.join('&')
}

const youtubeSearch = async (searchField) => {
  const query = {
    'part': 'snippet',
    'maxResults': 25,
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

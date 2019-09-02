import axios from 'axios'

export const searchWord = word => {
  return axios({
    method: 'GET',
    url: 'https://mydictionaryapi.appspot.com/?define' + word
  })
}

import axios from 'axios'

export interface fetchSnapshotInterface {
  proxyURL: string
  URL: string
}


export const fetchSnapshotAxios = ({ proxyURL, URL}: fetchSnapshotInterface) => (
  new Promise((resolve, reject) => {
    axios.get(proxyURL + URL, {headers: {'Content-Type': 'application/json'}})
      .then(res => {resolve(res.data)})
      .catch(err => {reject(err)})
  })
)

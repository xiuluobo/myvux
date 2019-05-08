import axios from 'axios'

function getJson(url, params) {
  return new Promise((resolve, reject) => {
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token
    // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}
function postJson(url,params){
    return new Promise((resolve, reject) => {
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token
        // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        axios.post(url, params)
          .then(response => {
            resolve(response.data)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      })
}

export default {
    getJson(url,params){
        return getJson(url,params);
    },
    postJson(url,params){
        return getJson(url,params);
    }
//   loginApi (user, password) {
//     return fetch('/api/login', 'user=' + user + '&password=' + password)
//   },
//   authTokenApi () {
//     return fetch('/api/authToken')
//   },
//   uploadApi (param, config) {
//     return fetch('/api/uploader', param, config)
//   }
}

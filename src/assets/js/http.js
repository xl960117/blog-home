const apiMethods = {
  methods: {
    apiGet(url, data) {
      return new Promise((resolve, reject) => {
        window.axios.get(url, data).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
        })
      })
    },
    apiPost(url, data) {
      return new Promise((resolve, reject) => {
        window.axios.post(url, data).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
        })
      })
    },
    apiDelete(url, id) {
      return new Promise((resolve, reject) => {
        window.axios.delete(url + id).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
        })
      })
    },
    apiPut(url, id, obj) {
      return new Promise((resolve, reject) => {
        window.axios.put(url + id, obj).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
        })
      })
    }
  }
}

export default apiMethods

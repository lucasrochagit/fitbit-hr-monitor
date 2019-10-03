const HOST = "TYPE_HOST_HERE"
const HEADERS = { "Content-Type": "application/json; charset=utf-8" }

export function ServerAPI() { };

function sendToServer(uri, data) {
    return new Promise((resolve, reject) => {
        fetch(uri, {
            headers: HEADERS,
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>  resolve(data))
        .catch(err => reject (err))
    })
}

function getFromServer(uri) {
      return new Promise((resolve, reject) => {
        fetch(uri, {
            headers: HEADERS,
            method: "GET"
        })
        .then(res => res.json())
        .then(res => resolve(data))
        .catch(err => reject (err))
      })
}

ServerAPI.prototype.sendHeartRateData = data => {
  sendToServer(HOST.concat("/heartrate"), data)
        .then(res => console.log('Successful posted!', JSON.stringify(res)))
        .catch(err => console.log('Error at post a heartrate data', err.message))
}

ServerAPI.prototype.getData = resource => {
  getFromServer(HOST.concat("/").concat(resource))
        .then(res => console.log('Result from request', JSON.stringify(res)))
        .catch(err => console.log('Error at get resource', err.message))
}
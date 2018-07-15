// shamefully stollen from https://github.com/kdoran/lookout/blob/master/app/utils/fetcher.js
const fetch = window.fetch

const defaultOptions = {
  headers: { 'Content-Type': 'application/json' }
}

export default {

  get (url, params) {
    return fetch(url, {...defaultOptions, ...params})
      .then(parseJSON)
      .catch(throwParsedError)
  },

  post (url, data = {}, method = 'POST') {
    const options = {
      ...defaultOptions,
      method,
      body: JSON.stringify(data)
    }
    return fetch(url, options)
      .then(parseJSON)
      .catch(throwParsedError)
  },

  put (resource, data = {}) {
    return this.post(resource, data, 'PUT')
  },

  delete (url) {
    return fetch(url, {
      ...defaultOptions,
      method: 'DELETE'
    }).then(parseJSON)
  }

}

async function parseJSON (resp) {
  let json = await resp.json()
  if (resp.status >= 200 && resp.status < 400) {
    return json
  } else {
    return Promise.reject(json)
  }
}

function throwParsedError (throwParsedError) {
  let errorString
  if (Object.keys(throwParsedError).length) {
    errorString = Object.keys(throwParsedError).map(key => (` ${key}: ${throwParsedError[key]}`)).join(' ')
  } else {
    errorString = throwParsedError.toString()
  }
  return Promise.reject(new Error(errorString))
}

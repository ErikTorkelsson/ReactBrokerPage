// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

export async function client(endpoint, { body, ...customConfig } = {}) {

    let token = window.localStorage.getItem('token');

    const headers = { 'Content-Type': 'application/json'}

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
  
    const config = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      mode: 'cors',
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    }
  
    if (body) {
      config.body = JSON.stringify(body)
    }
  
    let data
    try {
      const response = await window.fetch(endpoint, config)
      data = await response.json()
      if (response.ok) {
        return data
      }
      throw new Error(response.statusText)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
  }
  
  client.get = function (endpoint, customConfig = {}) {
    return client(endpoint, { ...customConfig, method: 'GET' })
  }
  
  client.post = function (endpoint, body, customConfig = {}) {
    return client(endpoint, { ...customConfig, body })
  }

  client.delete = function (endpoint, customConfig = {}) {
    console.log(endpoint);
    return client(endpoint, { ...customConfig, method: 'DELETE' })
  }

  client.put = function (endpoint, body, customConfig = {}) {
    return client(endpoint, { ...customConfig, method: 'PUT',body })
  }
  
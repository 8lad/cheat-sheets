// Promise-based HTTP Client for node.js and the browser
// For node - http module like const http = require('http');
// For client uses XMLHttpRequests under the hood

// Features:
// Progress capturing for browsers and node.js with extra info (speed rate, remaining time)

// Need to setup with npm or yarn. Or yse by cdn
// yarn add axios or npm install axios

const axios = require('axios');

axios.get('some.url').then((response) => console.log(response)).catch(error => console.error(error));

const getUsers = async () => {
  try {
    const response = axios.get('get-users.com', {
      params: {
        id: '223322'
      }
    });
    if (response.statusText === 'OK') {
      return response;
    }
    return 'error';
  } catch (error) {
    console.log(error);
  }
}

// post example

const { data } = await axios.post('set-some-data.com', {
  firstName: 'Stepna',
  lastName: 'Stepanos'
}, {
  headers: {
    'Content-Type': 'text/json'
  }
})

//  Axios methods

// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
// axios.postForm(url[, data[, config]])
// axios.putForm(url[, data[, config]])
// axios.patchForm(url[, data[, config]])


// Creating an instance

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// Then use instance

instance.get('some-url.com');


// All about request settings on this page - https://axios-http.com/docs/req_config

// Can send data as object

data: {
  firstName: 'Fred'
},

// or as a query params

data: 'Country=Brasil&City=Belo Horizonte',

// Response schema

{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  // As of HTTP/2 status text is blank or unsupported.
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` the HTTP headers that the server responded with
  // All header names are lower cased and can be accessed using the bracket notation.
  // Example: `response.headers['content-type']`
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  request: {}
}
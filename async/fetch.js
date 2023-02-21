'use strict';

// Fetch - is an API for server requests, based on Promises

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
// example from json placeholder
// here we make get request and get Promise, where response is the data from our server
// if we don't put any kind of request type - we'll get just get request

// Fetch methods
// response.text() – read response and return it as just a text,
// response.json() – turn response in JSON fromat,
// response.formData() – return in FormData format,
// response.blob() – return Blob, binary data with types,
// response.arrayBuffer() – return ArrayBuffer, as a low level binary info,
// response.body – this is a ReadableStream object, allows reading parts of the response

// Endpoint - target link for the request
// There are several methods - GET, POST, PUT, PATCH, DELETE

// If we need use other type of request, we have to use an object with additional settings
// It has a lot of different settings, but 2 of them are required
// Body can be a string, FormData object, Blob / BufferSource, and really rarely URLSearchParams in format x - www - form - urlencoded

fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: "POST", // or another method
    headers: {
        'Content-Type': 'application/json;charset=utf-8' // put the type of the content
    },
    body: JSON.stringify({ name: "Alex", age: 23 })
});


// Response params
// response.status – the HTTP response code ,
// response.ok – true, if the status between 200 - 299.
// response.headers – looks like a Map object with titles.
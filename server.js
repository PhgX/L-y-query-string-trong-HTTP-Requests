const http = require('http');
const url = require('url');
const StringDecoder = require('node:string_decoder').StringDecoder;

let server = http.createServer((req, res) => {
  let parseUrl = url.parse(req.url, true);
  let queryStringObject = parseUrl.query;

  console.log(queryStringObject);
  res.end();
})

server.listen(8080, ()=> {
  console.log('Sever is running on port 8080')
})
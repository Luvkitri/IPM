const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile(__dirname + req.url, (error, data) => {
    if (error) {
      res.writeHead(400);
      res.end(JSON.stringify(error))
    }

    res.writeHead(200);
    res.end(data);
  })
}).listen(8080);
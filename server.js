const http = require('http');
var fs=require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res){
  console.log('request was made: '+req.url);
  res.writeHead(200,{'Content-Type':'text/html'});
  var myReadStream=fs.createReadStream(__dirname+'\\'+'homework4.html','utf8');
  myReadStream.pipe(res);
});

server.listen(port, hostname)
console.log(`Server running at http://${hostname}:${port}/`);
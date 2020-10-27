var http = require('http');
var fs = require('fs');
//create a server 
http.createServer(function (req, res) {
  var files = fs.createReadStream("package.json");
  res.writeHead(200, {'Content-disposition': 'attachment; filename=package.json"}'}); //here you can specify file name
  files.pipe(res); // also you can set content-type
}).listen(8080); //the server object listens on port 8080
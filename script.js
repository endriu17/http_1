var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', function(err, content){
            response.writeHead(200, {'Content-type':'text/html'});
            response.write(content);
            response.end();
        });
    } else {
        fs.readFile('404-error.jpg', function(error, content) {
            response.writeHead(200, {'Content-type':'image/jpeg'});
            response.write(content);
            response.end();
        });
    }
});

server.listen(9000);

console.log("Listening on port 9000");
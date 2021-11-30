const http = require("http");

var server = http.createServer(function (req, res) {
    console.log("hello client");
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("hello ******");
});

server.listen(8000)

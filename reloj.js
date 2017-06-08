var http = require('http');

function start(port) {
    var server = http.createServer(function (request, response) {
        var data = '';

        request.on('data', function (chunk) {
            data += chunk;
        });

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ hora: 'OK' }));
    });

    if (port) {
        server.listen(port);
        console.log('Server listening.');
    }

    return server;
};


var server = start(3000);
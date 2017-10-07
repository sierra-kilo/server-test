var http = require('http');

var server1 = http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h3>DAMN! You fine!</h3>');

});

server1.listen(7000, function() {
    console.log('we are listening to port 7000');
});


var server2 = http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>DAMN! You ugly!</h1>');

});

server2.listen(7500, function() {
    console.log('we are listening to port 7500');
});

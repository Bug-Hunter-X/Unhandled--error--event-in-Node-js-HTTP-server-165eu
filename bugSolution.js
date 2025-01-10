const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', err => {
  console.error('Server error:', err);
  // Add further error handling as needed, like exiting gracefully.
  if (err.code === 'EADDRINUSE') {
    console.error('Port is already in use.');
  }
});

server.listen(8080);
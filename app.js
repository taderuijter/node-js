// Import core modules
const http = require('http');

// Import custom files
const routes = require('./routes');

const server = http.createServer(routes.handler)

server.listen(3000);

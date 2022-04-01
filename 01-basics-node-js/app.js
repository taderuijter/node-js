// Register core modules
const http = require('http');

// Register custom js
const routes = require('./routes');

// Console.logs some text
console.log(routes.someText);

// Create a server with the http core module and use routes.handler from routes.js
const server = http.createServer(routes.handler);

// Starts the server at port :3000
server.listen(3000);

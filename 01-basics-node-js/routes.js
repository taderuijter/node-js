// Import Core modules
const fs = require('fs');

// Request Handler function for routes
const requestHandler = (req, res) => {

  // Register the url from the browser
  const url = req.url;

  // Register the method from the req
  const method = req.method;

  // Write a html page to the root url
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  
  // Make a post funtion on the rout /message
  if (url === '/message' && method === 'POST') {

    // Register body as an empty array
    const body = [];

    // Get the chunk data from the page and push it to the body array
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    // After registering process the body chuck and make a file
    return req.on('end', () => {
      // Parse the body tag an decode it
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      // Register the message in the .txt file and redirect to root
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
      
    });
  }

  // this is shown when using a route that is not registered
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();

};


// Register the functions
// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
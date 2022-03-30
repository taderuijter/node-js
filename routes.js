const fs = require('fs');

const requestHandler = (req, res) => {

  // Store request url in variable
  const url = req.url;
  const method = req.method;

  // If url is homepage render a form
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  
  if (url === '/message' && method === 'POST') {
    
    // Save body in a variable as an empty array
    const body = [];

    // Get the chunk from the request
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    // Do someting with the chunk, concat it and write it to a message.txt file
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      // This writes a file synchinous. It means that the code will go on after it finishes writing the file
      // fs.writeFileSync('message.txt', message);

      // This is a better way of coding the method
      fs.writeFile('message.txt', message, err => {
        // Redirect to homepage when finished
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });

  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
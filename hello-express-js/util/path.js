const path = require('path');

// This is a helper funtion for the __dirname function
// It registers the path name
// mainModule looks at the file that starts the application (app.js)
// filename just shows the path of the application
module.exports = path.dirname(process.mainModule.filename);
// Import corre modules
const fs = require('fs');
const path = require('path');

// Register a global helper function for the path name
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

// Global funtion to get content from file
// Passed a callback (cb), can be named different
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
       // If CB gives an error / is empty register a empty array
      cb([]);
    } else {
      // Else read the file and parse the content to a javascript array
      // So the browser knows what data type it is
      // If you use JSON.stringify you will only see a string
      cb(JSON.parse(fileContent));
    }
  });
};

// Register the class Products to be used
module.exports = class Product {

  // Register a object from the data
  constructor(t) {
    this.title = t;
  }

  // Save function to save a product in a array
  save() {
    getProductsFromFile(products => {
      // Push the registerd product to the array
      products.push(this);
      // Write the product to the json file using stringify
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  // Register a function to show all products
  static fetchAll(cb) {
    // Calls the getProductsFromFile function
    getProductsFromFile(cb);
  }
};

// Import core modules
const path = require('path');

// Import NPM modules
const express = require('express');
const bodyParser = require('body-parser');

// Register express in a variable
const app = express();

// Register routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// This will parse body als a middleware to use in the routes
app.use(bodyParser.urlencoded({extended: false}));

// Register static file path so you can use it in your code
app.use(express.static(path.join(__dirname, 'public')));

// This is the route with a parent page /admin
app.use('/admin', adminRoutes);

// this is the route for the shop page
app.use(shopRoutes);

// This is the error page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server on port :3000
app.listen(3000);

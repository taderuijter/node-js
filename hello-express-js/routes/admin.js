// Register core modules
const path = require('path');

// Register NPM package
const express = require('express');

// Inport Helper
const rootDir = require('../util/path');

// Register Express Router
const router = express.Router();

// /admin/add-product => GET
// This wil get a page for us
// sendFile path join is the pathname to the html file
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
// This will post the information that is filled in the field
// After the post event you will redirect to the root / homepage
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;

// Import core modules
const path = require('path');

// Import NPM package
const express = require('express');

// Import helper
const rootDir = require('../util/path');

// Register Router from Express
const router = express.Router();

// On the root url get the shop.html file
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;

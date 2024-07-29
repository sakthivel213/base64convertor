const express = require('express');
const { base64ToFile } = require('../controllers/base64.controller');
const router = express.Router();

router.post('/convert', base64ToFile);
  

module.exports = router;

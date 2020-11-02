const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

// Test api
router.get('/test', (req,res) => res.json({msg: 'API working'}));

module.exports = router;
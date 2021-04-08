const express = require('express');
const { Restaurants } = require('../models/products');
const router = express.Router();
const { cityVancouver } = require('../services/productService.js')

router.get('/', (req, res) => {
    res.send('hiiii city')
});

router.get('/calgary', (req, res) => {
    res.send('Calgary')
});
router.get('/vancouver', (req, res) => {
    res.send('Vancouver')
});

module.exports = router;
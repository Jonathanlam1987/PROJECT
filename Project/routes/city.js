const express = require('express');
const { Product } = require('../models/products');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('we are on city page')
});
router.get('/calgary', (req, res) => {
    res.send('Calgary')
});
router.get('/vancouver', (req, res) => {
    res.send('Vancouver')
});

module.exports = router;
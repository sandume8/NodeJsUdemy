const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const products = [];

router.get('/add-product', (req, res) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product'})
});

router.post('/add-product', (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
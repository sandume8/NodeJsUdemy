const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const products = [];

router.get('/add-product', (req, res) => {
    // 템플릿 엔진 사용 시
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });

});

router.post('/add-product', (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
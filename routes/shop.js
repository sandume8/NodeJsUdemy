const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res) => {
    const products = adminData.products;

    // 템플릿 엔진 사용 시
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;
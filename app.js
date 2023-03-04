const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouters);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle:'Page Not Found', path:'Error'})
});

app.listen(3000);
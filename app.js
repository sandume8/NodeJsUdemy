const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars'); // handlebars import

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');

const app = express();
// pug와 다르게 외부 engine일 경우 express에 engine 등록, 첫번째 인자가 views에서 사용할 확장자 명
app.engine(
    'hbs',
    expressHbs({
        layoutsDir:'views/layouts/',
        defaultLayout:'main-layout',
        extname:'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', 'views');
// app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouters);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    res.status(404).render('404', {pageTitle:'Page Not Found'})
});

app.listen(3000);
/* eslint-disable no-unused-vars */
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
require('env2')('.env');
const router = require('./routes');

const app = express();
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.disable('x-powered-by');

app.use(router);

if(process.env.NODE_ENV=='production'){
    app.use(express.static(join(__dirname, '..', 'client', 'build')));
    app.get('/*', (req, res)=>{
        res.sendFile((join(__dirname, '..', 'client', 'build','index.html')));
    })
}



app.use((err, req, res, next) => {
    console.log('Error Middlware:', err);
    if (err.status) {
        return res.json({ msg: err.msg, status: err.status })
    }
    return res.status(500).send('server error');
});

module.exports = app;
var express = require('express');
var db = require('./db');
var UserController = require('./UserController');
var cron = require('node-cron')

var app = express();
app.use('/users', UserController);
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
});


module.exports = app;
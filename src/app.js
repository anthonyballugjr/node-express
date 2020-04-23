const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add route
app.use('/', require('./routes/home'));
app.use('/users', require('./routes/user'));

module.exports = app;
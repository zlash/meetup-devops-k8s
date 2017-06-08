'use strict';

const express = require('express');
const moment = require('moment');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send(moment().format("hh:mm:ss A"));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
'use strict';

const express = require('express');
const moment = require('moment');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send(moment().format("HH:mm:ss"));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
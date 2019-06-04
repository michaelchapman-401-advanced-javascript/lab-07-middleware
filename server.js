'use strict';

const express = require('express');
const fourohfour = require('./middleware/fourohfour.js');
const errorHandler = require('./middleware/errorHandler.js');
const addTime = require('./middleware/time.js');
const consoleLog = require('./middleware/consoleLog.js');

const app = express();

const PORT = process.env.PORT || 8080;


app.use(addTime);
app.use(consoleLog);


app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  res.status(200).send('Route D');
});

app.get('*', fourohfour, (req, res) => {
  console.log('404 not found');
  res.send('404 not found');
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


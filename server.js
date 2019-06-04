'use strict';

const express = require('express');
const fourohfour = require('./middleware/fourohfour.js');
const errorHandler = require('./middleware/errorHandler.js');
const addTime = require('./middleware/time.js');
const consoleLog = require('./middleware/consoleLog.js');
const raiseError = require('./middleware/raiseError.js');
const square = require('./middleware/square.js');
const routes = require('./routes/routes.js');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(addTime);
app.use(consoleLog);
app.use('/d', raiseError);
app.use(routes);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', square(7), (req,res) => {
  res.status(200).send(req.number);
});

app.get('*', fourohfour, (req, res) => {
  console.log('404 not found');
  res.send('404 not found');
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


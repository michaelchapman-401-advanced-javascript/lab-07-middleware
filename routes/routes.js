'use strict';

const router = require('express').Router();

router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.get('/d', (req,res) => {
  res.status(200).send('Route D');
});

module.exports = router;

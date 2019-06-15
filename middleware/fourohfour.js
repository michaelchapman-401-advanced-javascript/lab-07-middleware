'use strict';

module.exports = (err, req, res) => {
  console.error('Unknown route');
  res.status(404).send('Not found');
  res.end();
};

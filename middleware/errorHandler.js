'use strict';

module.exports = (err, req, res, next) => {
  console.error('Error detected on server');
  console.error(err);
  res.status(500).send('Server error!');
}

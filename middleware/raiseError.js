'use strict';

module.exports = (err, req, res) => {
  console.log('error');
  res.status(500).send('Felipe broke in our server');
};

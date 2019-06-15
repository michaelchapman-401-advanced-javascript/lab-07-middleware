'use strict';

module.exports = (req, res, next) => {
  let dateTime = new Date().toString();
  req.requestTime = dateTime;
  
  next();
};

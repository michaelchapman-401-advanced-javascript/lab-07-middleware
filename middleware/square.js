'use strict';

module.exports = (num) => {
  return (req, res, next) => {
    req.number = num*num;

    next();
  };
}; 

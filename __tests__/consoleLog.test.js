'use strict';

const consoleLog = require('../middleware/consoleLog.js');
const supertest = require('supertest');
const mockRequest = supertest(consoleLog);

describe('middleware', () => {
  describe('consoleLog module', () => {
    it('Should run console.log once when called', () => {
      let mockConsoleLog = jest.spyOn(console, 'log');
      mockConsoleLog.mockImplementation(() => true);
      let req = {
        method: 'get',
        path: '/a',
        requestTime: 'time'
      };
      let res = {};
      let next = jest.fn(() => true);

      // act
      consoleLog(req, res, next);

      expect(mockConsoleLog).toBeCalled();
    });
  });
});
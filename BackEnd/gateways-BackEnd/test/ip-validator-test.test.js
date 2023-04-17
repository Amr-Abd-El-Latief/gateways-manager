
var rewire = require('rewire');
var gatewayController = rewire('../src/controllers/gateways-controller');


var _validateIp = gatewayController.__get__('_validateIp');


// testing IP validator

describe("IP validator tests", () => {

  test("IP validator should return true when valid IP used ", () => {
    var validationResult = _validateIp('192.168.0.1');
    expect(validationResult).toBe(true);

  });

  test("IP validator should return true when valid IP used ", () => {
    var validationResult = _validateIp('192.168.1.12');
    expect(validationResult).toBe(true);

  });

  test("IP validator should return false when In-valid IP used ", () => {
    var validationResult = _validateIp('192.168.xxx');
    expect(validationResult).toBe(false);
  });

  test("IP validator should return false when In-valid IP used ", () => {
    var validationResult = _validateIp('192.168.1234.x');
    expect(validationResult).toBe(false);

  });

});
const gatewayController = require('../src/controllers/gateways-controller');

// gateway controller tests
describe("gateway controller tests", () => {
    test("Addition of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.sum(1,2)
    
    // assert
    expect(result).toBe(3);
    });

}
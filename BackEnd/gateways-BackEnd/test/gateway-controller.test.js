const gatewayController = require('../src/controllers/gateways-controller');
const request = require('supertest');
const app = require('express')();
// gateway controller tests


// testing  gateways application API's
describe('testing gateways Apis', function() {

   // testing API:  /allgateways 
    it('must get all gateways when calling /allgateways', function(done) {
      request('http://localhost:3000')
        .get('/api/gates/allgateways/')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8',done)

    });


       // testing API:  /gateways/:gatewayId    // Note gatewayId: make sure to test with gatewayId exists in DB 
       it('must get certain gateway when calling /gateways/:gatewayId ', function(done) {
        request('http://localhost:3000')
          .get('/api/gates/gateways/gateway_ex')
          .expect(200)
          .expect('Content-Type', 'application/json; charset=utf-8',done)
      
      });
  
//     Testing SAVE Gate Way 
   // testing API:  /savegateway 
    describe('must post a gateways when calling /savegateway', () => {
        it('should create a new post', async () => {
          const res = await request('http://localhost:3000')
            .post('/api/gates/savegateway/')
            .send(   {"gateway": {
                "gateway_id": "test_1",
                "gateway_name": "gateway_test_1",
                "IPv4": "192.0.2.146",
              }})
          expect(res.statusCode).toEqual(200)
        })
      })

   // testing API:  /savegateway 
   describe('must return validation error when Ip is invalid  when calling /savegateway', () => {
    it('should create a new post', async () => {
      const res = await request('http://localhost:3000')
        .post('/api/gates/savegateway/')
        .send(   {"gateway": {
            "gateway_id": "test_1",
            "gateway_name": "gateway_test_1",
            "IPv4": "192.0.xxx",
          }});
      
       expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('validation_message')
      expect(res.body['validation_message']).toEqual('IPv4 is not valid, please, enter it in the valid form')
    })
  })


     // testing API:  /savegateway    when missing parameter
     describe('must return  error message when gateway parameter is missing /savegateway', () => {
      it('should create a new post', async () => {
        const res = await request('http://localhost:3000')
          .post('/api/gates/savegateway/')
          .send(   {"device": {
              "gateway_id": "test_1",
              "gateway_name": "gateway_test_1",
              "IPv4": "192.0.xxx",
            }});
        
         expect(res.statusCode).toEqual(400)
        expect(res.body["message"]).toEqual("Can't save gateway due to missing params in the request")
      })
    })


//     Testing SAVE Gate Way  Device
   // testing API:  /savedevice 
   describe('must post a device when calling /savedevice', () => {
    it('should create a new device', async () => {
      const res = await request('http://localhost:3000')
        .post('/api/gates/savedevice/')
        .send(   {"device": {
          "device_id": 1,
          "device_vendor": "device_1",
          "created_at": new Date("1/2/2023"),
          "status": false
          },
        "gatewayId":"643c8b6cc633405179e2aebc"  // id from database
        })
      expect(res.statusCode).toEqual(200)
    })
  })




 // testing API:  /savedevice    when missing parameter
 describe('must return  error message when device parameter is missing /savedevice', () => {
  it('should create a new post', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/gates/savedevice/')
      .send(   {"no_device": {
        "device_id": 1,
        "device_vendor": "device_1",
        "created_at": new Date("1/2/2023"),
        "status": false
        },
      "gatewayId":"643c8b6cc633405179e2aebc"  // id from database
      });
    
     expect(res.statusCode).toEqual(400)
    expect(res.body["message"]).toEqual("Can't save device due to missing params in the request")
  })
})






     // testing API:  /gateways/:gatewayId    // Note gatewayId: make sure to test with gatewayId exists in DB 
      it('must get certain gateway when calling /gateways/:gatewayId ',function(done) {
        request('http://localhost:3000')
        .get('/api/gates/gatewaydevices/1')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8',done)
          
    });

  });





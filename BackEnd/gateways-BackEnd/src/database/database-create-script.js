var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Gateway = require('../models/gateways-model');


var url = "mongodb://localhost:27017/gatewaystestdb1";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
 // db.close();
});


// create sample gateways in database (sample data)
_createGateways = async (req, res) => {
  gateway = await Gateway.create({
    "gateway_id": "1",
    "gateway_name": "gateway_1",
    "IPv4": "192.0.2.144",
    "device": [
      {
        "device_id": 1,
        "device_vendor": "device_1",
        "created_date": "1/2/2023",
        "status": false
      },

      {
        "device_id": 2,
        "device_vendor": "device_2",
        "created_date": "2/2/2023",
        "status": true,
        "devices": []
      },
      {
        "device_id": 3,
        "device_vendor": "device_3",
        "created_date": "3/2/2023",
        "status": false,
        "devices": []
      },

    ]
  });
  console.log("gateway : " + JSON.stringify(gateway));

  gateway = await Gateway.create(
    {
      "gateway_id": "2",
      "gateway_name": "gateway_2",
      "IPv4": "192.0.2.146",
      "device": []
    });
  console.log("gateway : " + JSON.stringify(gateway));

  gateway = await Gateway.create({
    "gateway_id": "3",
    "gateway_name": "gateway_3",
    "IPv4": "192.0.2.148",
    "device": []
  });
  console.log("gateway : " + JSON.stringify(gateway));
  res.json(`gateway(s) added successfully!`);
}

_createGateways();
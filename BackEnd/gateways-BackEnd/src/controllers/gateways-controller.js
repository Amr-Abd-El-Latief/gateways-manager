// Define methods for Gateways database collection endpoints
const Gateway = require('../models/gateways-model');
const { ObjectId } = require('mongoose').Types;
const AllGateways = require('../Mock-data/test-data')
function _error_msg(text, error) {
    return {message: text, error: error};
}

// get all Gateways documents, if none return 404
exports.createGateways =async (req, res) => {
     gateway = await Gateway.create(  {
     "gateway_id": "1",
     "gateway_name": "gateway_1",
     "IPv4": "192.0.2.144"
   });
   console.log("gateway : " +JSON.stringify(gateway));

    gateway = await Gateway.create(  
        {
            "gateway_id": "2",
            "gateway_name": "gateway_2",
            "IPv4": "192.0.2.146"
          });
  console.log("gateway : " +JSON.stringify(gateway));

   gateway = await Gateway.create({
    "gateway_id": "3",
    "gateway_name": "gateway_3",
    "IPv4": "192.0.2.148"
  });
  console.log("gateway : " +JSON.stringify(gateway));
  res.json(`gateway(s) added successfully!`);
}



// get all Gateways documents, if none return 404
exports.getAllGateways =async (req, res) => {
           Gateway.find().then((gateway) => res.json(gateway))
               .catch((err) => {res.status(404).json(_error_msg('gateway not found', err.message))})
       
   };

// get all Gateway Gateway, if none return 404
exports.getGateway =async (req, res) => {
 console.log("AllGateways : " +JSON.stringify(AllGateways));
   // res.json(AllGateways);

    if (req.query.id) {
        console.log("1")
        // if ID is present in query, get gateway with that id
        Gateway.find({_id: ObjectId(req.query.id)})
            .then((gateway) => res.json(gateway))
            .catch((err) => {res.status(404).json(_error_msg('gateway not found with that ID. Error: ', err.message))})
    } else {
        console.log("2")
        // if `limit` key specified in query - use it, else default to limit=0.
        let queryLimit = req.query.limit ? req.query.limit : 0; 
        console.log("queryLimit : " +queryLimit);

        Gateway.find().limit(queryLimit) // query the database
            .then((gateway) => res.json(gateway))
            .catch((err) => {res.status(404).json(_error_msg('gateway not found', err.message))})
    }
};

// post Gateways gateway(s)
exports.addGateway = (req, res) => {

    console.log(" req.body : " +JSON.stringify(req.body))
    let gateways = req.body;
    // TODO: add validation for body
    let gateways_count = gateways.length ? gateways.length : 1; // NOTE: if docs.length undefined it is 1.

    Gateway.create(gateways)
        .then((data) => res.json({message: `${gateways_count} gateway(s) added successfully!`}))
        .catch((err) => res.status(400).json(_error_msg('Failed to add gateway', err.message)));
};

// update Gateways gateway.
exports.updateGateway = (req, res) => {
    //  <<<<<<  TODO: add validation for body   >>>>>> 
    // <<<<<<<<TODO: implement logic to validate `request.body` and to update only specified fields, preserving sibling values (not overwriting).
    const fields = {};

    Gateway.findByIdAndUpdate(
            req.params.id, 
            fields,
            {new: true, runValidators: true}, // to return updated object
        ) 
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json(_error_msg('Failed to update gateway.', err.message)));
};

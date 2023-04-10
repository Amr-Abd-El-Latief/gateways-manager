// Define methods for Gateways database collection endpoints
const Gateways = require('../models/gateways-model');
const { ObjectId } = require('mongoose').Types;
const AllGateways = require('../Mock-data/test-data')
function _error_msg(text, error) {
    return {message: text, error: error};
}

// get all Gateways documents, if none return 404
exports.getGateway =async (req, res) => {
 console.log("AllGateways : " +JSON.stringify(AllGateways));
   // res.json(AllGateways);

   const firstGateway = await Gateways.findOne({});
   res.json(firstGateway);
   return;
    if (req.query.id) {
        console.log("1")
        // if ID is present in query, get document with that id
        Gateways.find({_id: ObjectId(req.query.id)})
            .then((gateway) => res.json(gateway))
            .catch((err) => {res.status(404).json(_error_msg('Document not found with that ID. Error: ', err.message))})
    } else {
        console.log("2")
        // if `limit` key specified in query - use it, else default to limit=0.
        let queryLimit = req.query.limit ? req.query.limit : 0; 
        console.log("queryLimit : " +queryLimit);

        Gateways.find().limit(queryLimit) // query the database
            .then((gateway) => res.json(gateway))
            .catch((err) => {res.status(404).json(_error_msg('Document not found', err.message))})
    }
};

// post Gateways document(s)
exports.addGateway = (req, res) => {
    let docs = req.body;
    // TODO: add validation for body
    let doc_count = docs.length ? docs.length : 1; // NOTE: if docs.length undefined it is 1.

    Gateways.create(docs)
        .then((data) => res.json({message: `${doc_count} document(s) added successfully!`}))
        .catch((err) => res.status(400).json(_error_msg('Failed to add document', err.message)));
};

// update Gateways document.
exports.updateGateway = (req, res) => {
    //  <<<<<<  TODO: add validation for body   >>>>>> 
    // <<<<<<<<TODO: implement logic to validate `request.body` and to update only specified fields, preserving sibling values (not overwriting).
    const fields = {};

    Gateways.findByIdAndUpdate(
            req.params.id, 
            fields,
            {new: true, runValidators: true}, // to return updated object
        ) 
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json(_error_msg('Failed to update document.', err.message)));
};

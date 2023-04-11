// Define methods for Gateways database collection endpoints
const Gateway = require('../models/gateways-model');
const AllGateways = require('./test-data');
const mongoose = require('mongoose');
const dbConnectionUrl="mongodb://localhost:27017/gatewaysdb";
/**
 * connect to the dB
 */

mongoose.connect(dbConnectionUrl);

/**
 * function to add gateways in the DB
 */
 () => {
    AllGateways.forEach(element => {

        console.log("creating element: " +JSON.stringify(element));
        Gateway.create(element);
    });
}

const express = require('express');
const router = express.Router();

const {
    getGateway,
    addGateway,
    updateGateway,
    getAllGateways,
    createGateways
} = require('../controllers/gateways-controller');

/**
 * @route /createtestgateways
 * @description create gateways in data base as sample data
 */
router.get('/createtestgateways',createGateways);


/**
 * @route GET /gateways
 * @description get all gateways from the backend
 */
router.get('/allgateways',getAllGateways);

/**
 * @route GET /gateways
 * @description get all gateways from the backend
 */
router.get('/gateways', getGateway);

/**
 * @route POST /gateways/documents
 * @description add new gateway to the backend
 */
router.post('/addgateways', addGateway);

/**
 * @route PUT /gateways/documents/:id
 * @description update gateway (with id)
 */
router.put('/gateways/:id', updateGateway);

module.exports = router;
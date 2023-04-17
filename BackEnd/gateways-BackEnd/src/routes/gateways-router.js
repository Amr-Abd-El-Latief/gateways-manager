const express = require('express');
const router = express.Router();

const {
    getGateway,
    addGateway,
    updateGateway,
    getAllGateways,
    createGateways,
    getGatewayDevices,
    deleteGatewayDevice,
    saveGatewayDevice,
    deleteGateway,
    saveGateway
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
router.get('/gateways/:gatewayId', getGateway);

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

/**
 * @route Get /gate/gatewaydevices/:gatewayId
 * @description update gateway (with id)
 */
router.get('/gatewaydevices/:gatewayId', getGatewayDevices);


/*
* @route Delete /gates/deletedevice/
* @description Delete Device from gateway
*/
router.delete('/deletedevice/:gatewayId/:deviceId',deleteGatewayDevice);

/**
 * @route Delete /gates/deletegateway/
 * @description Delete Device from gateway
 */
router.delete('/deletegateway/:gatewayId/',deleteGateway);


/**
 * @route save /gate/savedevice/
 * @description save new Device to certain gateway
 */
router.post('/savedevice', saveGatewayDevice);

/**
 * @route save /gate/savegateway/
 * @description save new gateway to certain database
 */
router.post('/savegateway', saveGateway);


module.exports = router;
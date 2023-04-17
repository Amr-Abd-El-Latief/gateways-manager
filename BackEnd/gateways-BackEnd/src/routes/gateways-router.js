const express = require('express');
const router = express.Router();

const {
    getGateway,
    getAllGateways,
    createGateways,
    getGatewayDevices,
    deleteGatewayDevice,
    saveGatewayDevice,
    deleteGateway,
    saveGateway
} = require('../controllers/gateways-controller');


// ## gateways
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
 * @description gets certain gateway from database
 */
router.get('/gateways/:gatewayId', getGateway);

/**
 * @route save /gate/savegateway/
 * @description save new gateway to certain database
 */
router.post('/savegateway', saveGateway);

/**
 * @route Delete /gates/deletegateway/
 * @description Delete gateway from backend
 */
router.delete('/deletegateway/:gatewayId/',deleteGateway);





// ###  devices

/**
 * @route Get /gate/gatewaydevices/:gatewayId
 * @description gets all the devices for certain gateway
 */
router.get('/gatewaydevices/:gatewayId', getGatewayDevices);


/*
* @route Delete /gates/deletedevice/
* @description Deletes Device from gateway
*/
router.delete('/deletedevice/:gatewayId/:deviceId',deleteGatewayDevice);


/**
 * @route save /gate/savedevice/
 * @description save new Device to certain gateway
 */
router.post('/savedevice', saveGatewayDevice);

module.exports = router;
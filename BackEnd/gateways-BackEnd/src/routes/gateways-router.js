const express = require('express');
const router = express.Router();

const {
    getGateway,
    addGateway,
    updateGateway,
} = require('../controllers/gateways-controller');

/**
 * @route GET /gateways/documents
 * @description get all gateways from the backend
 */
router.get('/gateways', getGateway);

/**
 * @route POST /gateways/documents
 * @description add new gateway to the backend
 */
router.post('/gateways', addGateway);

/**
 * @route PUT /gateways/documents/:id
 * @description update gateway (with id)
 */
router.put('/gateways/:id', updateGateway);

module.exports = router;
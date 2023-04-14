const mongoose = require('mongoose');

// create a gateways document 
const GatewaysSchema = new mongoose.Schema({
    gateway_id: {type: String, required: true},
    gateway_name: {type: String, },
    IPv4: {type: String, },
    device: [{
        device_id: Number, 
        device_vendor: String, 
        created_date: Date,
        status: Boolean
      
    }]
},{ collection : 'gateway' });

const Gateways = mongoose.model('Gateway', GatewaysSchema);

module.exports = Gateways;


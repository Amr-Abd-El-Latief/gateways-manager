const express = require('express');
const app = express();
const connectMongoDB = require('./config/mongoDB');
require('dotenv').config();
const gatewaysRoutes = require('./routes/gateways-router');

// connect to database
connectMongoDB();

// middleware
app.use(express.json({extended: false}));

// Add routes
app.use('/api/gates', gatewaysRoutes);

// get port and default value
const PORT = process.env.PORT || 3000;

// run server
app.listen(PORT, () => {
    console.log('Backend running on port:' + PORT);
});
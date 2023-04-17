const express = require('express');
var cors = require('cors')
const app = express();
const connectMongoDB = require('./config/mongoDB');
require('dotenv').config();
const gatewaysRoutes = require('./routes/gateways-router');

//allow front end urls
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

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
const express = require('express');
var cors = require('cors')
const app = express();
const connectMongoDB = require('./config/mongoDB');
require('dotenv').config();
const gatewaysRoutes = require('./routes/gateways-router');


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
// connect to database
connectMongoDB();

// middleware
app.use(express.json({extended: false}));


// Add routes
app.use('/api/gates', gatewaysRoutes);


//allow front end url 



//app.use(cors({origin:"http://127.0.0.1:3000"}))
// app.use((req, res, next) => {
//     var origin = req.headers.origin;
//     console.log(" req.headers : " +JSON.stringify(req.headers));

//     if(origin){
//         console.log(" origin : " +JSON.stringify(origin));
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     next();
// });
// get port and default value
const PORT = process.env.PORT || 3000;

// run server
app.listen(PORT, () => {
    console.log('Backend running on port:' + PORT);
});
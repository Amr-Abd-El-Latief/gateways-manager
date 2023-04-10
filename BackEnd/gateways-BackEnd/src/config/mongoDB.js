const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'gatewaysdb';

const MONGO_URI = `${URI}/${dbName}`;
console.log(MONGO_URI);

const connectMongoDB = async() => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('Failed to connect to MongoDB: ' + err.message);
        process.exit(1);
    }
};

module.exports = connectMongoDB;
const express = require ('express')
const mongoose = require('mongoose')
require('dotenv').config({path:'./.env'});

const app = express()

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
});


module.exports = app
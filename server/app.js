const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRouter = require('./router/postRouter')

// dotenv CONFIGURATIONS
require("dotenv").config();

// middleware (this is to use a json)
app.use(express.json())

// ENVIRONMENTAL VARIABLES
const db_url = process.env.DBURL;
const port = process.env.PORT || 7070

// MongoDB connection
const connect = ()=>{
    mongoose.connect(db_url);
    try{
        console.log('DB connection established');
    } catch(err){
        console.log(err);
    }
}

// ROUTES
app.use('/posts',postRouter)

// SERVER
app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
    connect()
})
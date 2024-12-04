const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const forumRouters = require('./routers/forumRouters');
require('dotenv').config();
app.use(express.json());
app.use(cors());

const uri = process.env.MONGODBURI;

async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

app.use("/api/discussionforum",forumRouters)

connect();
app.listen(5000,()=>{
    console.log('App is running on port 5000');
});
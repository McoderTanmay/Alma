const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const USER_ROUTER = require('./routers/userRouters');
const forumRouters = require('./routers/forumRouters');
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGODBURI;

//routes
app.use("/api/user", USER_ROUTER);

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
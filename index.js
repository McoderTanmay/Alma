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
app.use("/api/discussionforum",forumRouters);


async function connect(){
    try {
        await mongoose.connect(`${uri}/aludent`);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

connect();
app.listen(5000,()=>{
    console.log('App is running on port 5000');
});